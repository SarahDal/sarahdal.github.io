---
layout: single
author: sarah
title: Home Assistant
category: Home Assistant

gallery:
  - url: /assets/images/dashmark1.jpg
    image_path: /assets/images/dashmark1.jpg
    alt: "A white dashboard with four seven segment displays and a few LEDs, and a small OLED display. Labels are written in marker: Lounge Air Quality %, Lounge Temp, Upstairs Temp, Extension Temp. The LEDs, one ble and one red, are labelled Hot Water, and hte small OLED displays bedroom and is labelled with Fury Is In The"
    title: "First iteration of dashboard"
  - url: /assets/images/dash1.jpg
    image_path: /assets/images/dash1.jpg
    alt: "The second dashboard, made of dark plywood and labelled with a dymo labeller: Lounge Air Quality %, Lounge Temp, Upstairs Temp, Extension Temp. The LEDs, one ble and one red, are labelled Hot Water, and the small OLED displays bedroom and is labelled with Fury Loc"
    title: "Second dashboard"
  - url: /assets/images/dash2.jpeg
    image_path: /assets/images/dash2.jpeg
    alt: "Rear of the dash; an ESP32 on a small breadboard is wired up to the back of the seven segment displays, LEDs, OLED and a buzzer with coloured wires."
    title: "Rear of sensor board 2"

---

Home Assistant runs on a Raspberry Pi and can control most modern Smart Home devices, plus a whole load more you can make yourself.

I started off using [ESPHome](https://esphome.io/){:width="700px"} to control ESP32s with simple temperature and humidity monitors. They send their data using MQTT over bluetooth. From there, I hacked an [IKEA VINDRIKTNING](https://style.oversubstance.net/2021/08/diy-use-an-ikea-vindriktning-air-quality-sensor-in-home-assistant-with-esphome/){:width="700px"} air quality monitor; now I can see how the air quality changes when cooking or using the open fire.

By adding a [Zigbee stick](https://www.home-assistant.io/integrations/zha/){:width="700px"}, I can now control the huge range of smart home devices that communicate over a Zigbee mesh.

## Where is the Cat?

![]({{ site.url }}{{ site.baseurl }}/assets/images/fury.jpg){:width="700px"} Fury and his geotag

My blind cat, Fury, loves exploring the garden. He shouldn't be able to get out, as the fence is too high for him to jump, but what if someone leaves the gate open?

He has a GPS tag on his collar ([a Tractive device](https://tractive.com)) It intergrates nicely into Home Assistant, allowing me to set an alarm if it detects he is no longer within range - i.e., he's escaped. This means I don't need to constantly watch him when he's playing out.

The Tractive collar also has BLE, as does my watch, meaning we can both be tracked within the house during the day using the brilliant [ESPresense](https://espresense.com/){:width="700px"}, which runs on ESP32s. This can not only look out for specific BLE devices, but also handle a selection of common sensors. However calibration can be fiddly, and I've found that they often seem to "flicker" position between rooms, but it is useful if I want to know where he is

![]({{ site.url }}{{ site.baseurl }}/assets/images/tracking.png){:width="700px"} Location History of me and the cat from the Home Assistant dash

## The Sensor Dashboard

![]({{ site.url }}{{ site.baseurl }}/assets/images/HAdash.JPG){:width="700px"} Basic Home Assistant dashboards

![]({{ site.url }}{{ site.baseurl }}/assets/images/HAdash2.JPG){:width="700px"}

Data from all of these sensors can be displayed on a custom dashboard, a pretty collection of graphs and figures plus buttons, usually displayed on a tablet or screen. This was a bit boring, so I set about creating a physical dashboard using as vintage components as I could.

Current Temperature and Air Quality can be displayed on old school 7-segment displays. There are two chunky LEDs, showing if the hot water in the tank is hot enough for a shower or not. Currently, a small OLED tells me which room the cat is in.

{% include gallery caption="gallery" %}

