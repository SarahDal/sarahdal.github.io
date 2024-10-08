---
layout: single
author: sarah
title: Postboxes
header:
  teaser: /assets/images/image.jpg
category: GIS
tags: GIS

---

| [![Image]({{ site.url }}/assets/images/postbox/postbox.jpg)]({{ site.url }}/assets/images/postbox/postbox.jpg) | 
|:--:| 
| a red "Type A" pillar postbox |


Because with GIS all things are possible, I was wondering if I could use it to find out where the most remote postbox in the UK is.

I can get postbox locations from [OSM](https://www.openstreetmap.org/), but it's not quite that simple - the Post Office data in OSM was aquired through a FOI request, but the data isn't very precise and is trademarked, so there's a good [OSM project to clean up and verify it all](https://osm.mathmos.net/postboxes/). The data in OSM is still probably good enough for what I want though.

To get the data out of OSM, I used [Overpass](https://overpass-turbo.eu/) to download all of the locations of all postboxes in a CSV. The overpass string for this was:

```
[out:csv(::lat, ::lon, name, ref)][timeout:300];
area["name"="United Kingdom"]->.searchArea;
node["amenity"="post_box"](area.searchArea);
out center;
```

Switch to the Data tab on overpass before running it, and we get a list of features within the area named "United Kingdom" where "amenity" matches "post_box". 

Nice! Now I can easily copy these into a csv file, and import it into QGIS using "add delimited text layer..." and remembering to set the Geometry CRS to WGS84 4326. 

| [![Image]({{ site.url }}/assets/images/postbox/csv.png)]({{ site.url }}/assets/images/postbox/csv.png) | 
|:--:| 
|

Now we can see the postboxes mapped in a vaugely UK shaped pattern.

| [![Image]({{ site.url }}/assets/images/postbox/postboxes1.png)]({{ site.url }}/assets/images/postbox/postboxes1.png) | 
|:--:| 
| 

To convert the CRS to BNG.. wait, why? because WGS84 is an ellipsoidal projection, and we need to use a Cartesian system, which the British National Grid is. A Cartesian projection is based on a flat map, so we can accurately measure things to the nearest cm.

To convert the CRS to BNG, save as a gis file (shapefile or geopackage, your choice), right click the layer, then export - save featuers as... Select the format, the filename, change the CRS to 27700, and select "Add saved file to map". The postboxes are now mapped to BNG.

To find the post box the furthest away from any other postbox, I need a formula to calculate the distance to the second nearest postbox, because the closest postbox to a postbox is itself..
```
 distance(
  $geometry,
  array_get(
    overlay_nearest(
      layer := '<point_layer_name>',
      expression := $geometry,
      limit := 2
    ),
    1
  )
 )
```

pop this into the field calculator, replacing <point_layer_name> with the name of the postbox layer. Give the output field a name - Distance in this case - and click OK. This now adds a value to each postbox of the distance to the next postbox.

| [![Image]({{ site.url }}/assets/images/postbox/FieldCalc.png)]({{ site.url }}/assets/images/postbox/FieldCalc.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/distances1.png)]({{ site.url }}/assets/images/postbox/distances1.png) | 
|

Now I can order the distance column by size, and zoom to the postbox the most remote from any other, and see that it is the one on the wall of the village shop on the Isle of Colonsay, 24724m (or 24.72km) from the next nearest postbox.

| [![Image]({{ site.url }}/assets/images/postbox/Colonsay1.png)]({{ site.url }}/assets/images/postbox/Colonsay1.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/colonsay_google.png)](https://maps.app.goo.gl/Smw8tBJDuEoNWpq99) | 
|:--:| 
| A google Streetview of Colonsay general store, a small grey building under a lovely blue sky, with various vehicles parked outside.| 

The next most remote is the postbox on Lundy, in the Bristol Channel, 21.73km from the next postbox on the North Devon Coast (but see below..)

| [![Image]({{ site.url }}/assets/images/postbox/Lundy.png)]({{ site.url }}/assets/images/postbox/Lundy.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/LundyPost.jpg)](https://www.geograph.org.uk/photo/1339472) | 
|:--:| 
| Lundy's Postbox in this Geograph image taken by [Pauline E](https://www.geograph.org.uk/profile/13903) in 2009. A red postbox with no cypher is set in a stone wall next to a window. Sat in the window is a model of a puffin. | 

The postbox in the hamlet of Altnaharra in Sutherland is the most remote postbox on the British Mainland, 20.94km in a straight line from the next postbox on the B871 to the North East.  

| [![Image]({{ site.url }}/assets/images/postbox/Altnaharra.png)]({{ site.url }}/assets/images/postbox/Altnaharra.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/Altnaharra_google.png)](https://maps.app.goo.gl/y8891JY2Ws7zqBgS7) | 
| A google streetview image of a small red postbox on a post, by a chestnut paling fence infront of a windowless white one-story building, probably an old telephone exchange. There's a tree behind the postbox. 

Fourth is Garrison, a village in Northern Ireland in Enniskillen near the border with the Republic. I don't have the postboxes south of the border, so there may very well be one closer, but it's 18.43km from the next postbox

| [![Image]({{ site.url }}/assets/images/postbox/Garrison.png)]({{ site.url }}/assets/images/postbox/Garrison.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/Garrison-google.png)](https://maps.app.goo.gl/KF6HgpYT9H5kjHG8A) | 
|  A street under a grey sky, with a yellow painted building and a road lined with parked cars. Between the cars is a small postbox on a pole.

Finally, the 5th most remote is on the Isle of Eigg, on the small isles,  14.44km from the next postbox

| [![Image]({{ site.url }}/assets/images/postbox/SmallIsles.png)]({{ site.url }}/assets/images/postbox/SmallIsles.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/Eigg-google.png)](https://maps.app.goo.gl/o9d5otXfA5jAaCbL9) | 
| Google streetview of a white L-shaped single story building on a small road with a car park next to it. People are milling abour; white houses dot the gentle slope rising in the distance. THe sea behind it and the sky above are glorious blue in the sunshine.

HOWEVER! Lundy isn't technically a Royal Mail postbox. You can post letters there, but you have to affix a [Lundy Postage Stamp](https://www.landmarktrust.org.uk/lundyisland/discovering-lundy/lundy-post/) as well as a UK stamp, to pay for carriage to the post office in Ilfracombe on the mainland, and nowadays the Postbox has been painted blue.

| [![Image]({{ site.url }}/assets/images/postbox/LundyStamps.jpg)]({{ site.url }}/assets/images/postbox/LundyStamps.jpg) | 
| An orange 33p Lundy stamp and a green Lundy 5p stamp affixed to the bottom left corner of a white enveleope. Both have woodcuts of puffins on them.

So discounting Lundy, the next most remote postbox after Eigg are also on the small isles - a draw between the islands of Rum and Canna, both the closest to each other, at 14.16km apart

| [![Image]({{ site.url }}/assets/images/postbox/SmallIsles.png)]({{ site.url }}/assets/images/postbox/SmallIsles.png) | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/CannaPO.jpg)](https://www.geograph.org.uk/photo/5085054) | 
|:--:| 
| Canna's Post Office on Geograph, with this pic taken by [Gordon Brown](https://www.geograph.org.uk/profile/1876) in 2016. A ref telephone box that's seen better days stands on the grass in front of a green shed, with the sign "Eilean Chanach - Canna Post Office" above the door and a small red postbox on a pole in front. A large satelite dish is stood next to the Post Office, and to the right of the picture a couple of pallets are leaning against the white washed wall of a building. | 
|:--:| 
| [![Image]({{ site.url }}/assets/images/postbox/RumPO.jpg)](https://www.geograph.org.uk/photo/7183797) | 
|:--:| 
| Rum's Post Office and post box in this photo taken in 2022 by [M J Richardson](https://www.geograph.org.uk/profile/15498). A large wooden single story building is the islands' community hall, to the left is a small annex that houses the post office. Some picnic benches are on the grass out front and at the edge of the building near some wheely bins is a small postbox. | 

