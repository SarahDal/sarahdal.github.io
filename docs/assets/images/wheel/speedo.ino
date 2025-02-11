// A simple LCD speedo for a cat wheel. 
// Change wheelCircumference to the distance between magnets on the wheel
// work out the total circumference of your wheel (diameter times pi) 
// then divide that by the number of magnets.

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int reedPin = 19;                 // Pin for the magentic sensor
const float wheelCircumference = 0.84823;  // Distance between magnets in metres 
volatile int cnt = 0;     // Counts the number of wheel rotations
volatile unsigned long revolutions = 0;
unsigned long lastTime = 0;  // Time to calculate speed
float distance = 0.0;        // Total distance covered
float speed = 0.0;           // Speed in meters per second

volatile unsigned long lastTriggerTime = 0;  // Last interrupt trigger time
const unsigned long debounceDelay = 150;     // Debounce delay in milliseconds

#define I2C_SCL 22
#define I2C_SDA 21

//set up LCD display
LiquidCrystal_I2C lcd(0x27, 16, 2);  // set the LCD address to 0x27 for a 16 chars and 2 line display

void count() {
  unsigned long currentTime = millis();
  
  if (currentTime - lastTriggerTime > debounceDelay) {
    cnt++;
    revolutions++;                  // Increment the total revolutions count
    lastTriggerTime = currentTime;  // Update the last trigger time
  }
}

void setup() {
  Serial.begin(115200);
  Wire.begin(I2C_SDA, I2C_SCL);

  pinMode(reedPin, INPUT_PULLUP);                                   // Set reed pin as input
  attachInterrupt(digitalPinToInterrupt(reedPin), count, FALLING);  // Trigger count on rising edge
  lcd.init();                                                       // initialise the LCD
  lcd.backlight();                                                  // Light the beacons
}


void loop() {
  // Every 5 seconds, calculate the speed and distance
  unsigned long currentTime = millis();

  if (currentTime - lastTime >= 5000) {
    float timeInSeconds = (currentTime - lastTime) / 1000.0;

    // Calculate speed in meters per second
    speed = (cnt * wheelCircumference) / timeInSeconds;

    // Calculate total distance
    distance += cnt * wheelCircumference;

    // Go to the Write subroutine to output the results
    Write();

    // Reset the count and update the last time
    cnt = 0;
    lastTime = currentTime;
  }
}


//Writes the results to the serial monitor and the LCD
void Write() {

  // information for Serial Monitor
  Serial.println("Data:");
  Serial.print("Revolutions: ");
  Serial.println(revolutions);
  Serial.print("cnt: ");
  Serial.println(cnt);
  Serial.print("Current Speed: ");
  Serial.println(speed);
  Serial.print("Distance: ");
  Serial.println(distance);
  Serial.println(" -- ");
  // print to LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Speed: ");
  lcd.print(speed);
  lcd.print("m/s");
  lcd.setCursor(0, 1);
  lcd.print("Dist: ");
  lcd.print(distance);
  lcd.print("m");
  //lcd.print("count: ");
  //lcd.print(revolutions);
}
