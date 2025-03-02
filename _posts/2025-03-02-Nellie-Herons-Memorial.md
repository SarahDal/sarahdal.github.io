---
layout: single
author: sarah
title: Nellie Herons Memorial
header:
  teaser: /assets/images/BorderStones/GtHethaCairn.jpg
category: Northumberland
tags: walks northumberland history
location:
    geojson: '{
        "type": "Feature",
        "properties": {"popupContent": "The Border Stones Walk"},
        "geometry": {
            "type": "Point",
            "coordinates": [55.426, -2.061]
        }
    }'
---
---


While looking for new walks, I found a book [Best Walks in Northumberland, by Frank Duerden](https://archive.org/details/bestwalksinnorth0000duer) and published in 1990, on Internet Archive. Although you can borrow the whole thing on Internet Archive, I bought a secondhand copy and chose this walk - Salter's Road - because it didn't look super interesting on the ground, a walk mostly along stream valleys and a bit of going over the top of moorland, so I was curious as to why it was one of the Best Walks in Northumberland.

I was very wrong, the scenery was stunning, although spoilt a bit by the big tracks that have been put in along most of the bridleways. I also plotted the route on an OS map rather than try to follow Frank's beautifully detailed, but probably a little outdated, hand-drawn route.

| ![A scan of a hand drawn route map of a walk through trees and hills]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/Duerden.jpg)| 
|:--:| 
|  |

I followed the Salter's Road out of Alnham again (thinking about planning a walk of the whole length of the Salter's Road to Kirk Yetholm at some point soon), through the White Gate and across some boggy moorland. The wind really started picking up as I reached Ewartly Shank, dropped down again to cross the Shank Burn and then a steep climb up a fairly new track.  

| ![A view over a broad valley of yellow grass and young saplings. in the foreground, the ground is boggy and crossed with a fence; the mid-distance holds some young broadleaf planting. Hills rise up in the distance to Hedgehope on the horizon.]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/Hedge.jpg)| 
|:--:| 
| Hedgehope in the distance, from the Shank Burn |

Once at the top I started descending into the very top of the Breamish Valley, and it looked stunning. A shepherd on a quad bike stopped to chat and complain about the wind, which put me in a good mood too. Once at Low Bleakhope, I left the Salter's Road and followed the tarmac road along the Breamish River, where it was a little more sheltered from the wind and almost warm in the sunshine.

| ![A view down a narrow valley from high up. The grass is yellowy and tussocky; a reddish dirt track leads away on the right hand side of the picture, travelling down the valley which has patches of brown heather and at the bottom, steep banks to a burn. The track leads in the far distance to a cottage (Low Bleakhope) surrounded by conifer trees. Above it further hills rise to the blue sky]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/Bleakhope.jpg)| 
|:--:| 
| A view down Salter's Road to Low Bleakhope |

| ![A steep-sided valley in the sunshine with a burn, the Breamish River, bubbling and crashing over rocks. A narrow road runs alongside it, with telegraph poles every so often.]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/Breamish.jpg)| 
|:--:| 
| The Breamish River at Snuffies Scar


After lunch by the river and another 3 miles, I reached Alnhamoor and turned to climb back up onto the moors, stopping briefly at Cobden, where the first OS Map marks as "in Ruins" but there's nothing here now but a badly wind-blown plantation. I followed the track up until I spotted the memorial stone for Nellie Heron, a small carved stone surrounded by a pile of rocks.


| ![A small square sided stone, covered with lichen and with stones around it's base stands in the grass. It is roughly carved with "Eleanor Heron Died Dec 1863"]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/NellieHeron2.jpg)| 
|:--:| 
| Eleanor Heron's Memorial Stone | 

Eleanor (Nellie) Heron was tending to a sick shepherd in Alnham on 3 December, 1862. At 3pm she set off for home, despite the pleas of two of her friends not to risk it in the dreadful weather. Sadly she never made it; her frozen body was found at this spot. "The grief of the two was great when they saw her mount the hills in the blinding drift of snow, singing in her cheery and resounding voice the popular revival hymn of the time “A Day’s March Nearer Home”, never to be seen alive again but buried in the drift." (from [Records & Recollections](http://www.alnandbreamishlhs.org.uk/uploads/pdf/R&R%20Volume%202%20No%2010%20(Dec%202013)%20complete.pdf), the newsletter of the Aln & Breamish Local History Society)

| ![Nellie Heron's memorial stone can be seen as the only feature in a vast expanse of yellowy moorland grass, stretching off to the horizon]({{ site.url }}{{ site.baseurl }}/assets/images/nellie/NellieHeron1.jpg)| 
|:--:| 
| Eleanor Heron's Memorial Stone stands in the moorland | 

The small stone feels very small indeed when surrounded by such a vast expanse of bleak moorland, let alone what it must have been like as darkness fell on a snowy December night. The spot lies less than a mile from the Shepherd's Cairn, where Jock Scott and Willie Middlemas lost their lives in a blizzard 100 years later, that [I visited a few weeks ago]({% link _posts/2024-12-14-Alnham.md %}).

From here there was a little bit of bog-hopping to get to the bridleway. Up to the 1930s maps, a Cross (remains of) or (site of) is marked on the map at the bridleway here, but if there was anything left it's probably been obliterated by yet another broad crushed stone track that are covering the hills now. I walked to the Salter's Road and back down into Alnham; I had a look in the lovely church there but Nellie Heron's final resting place is at Whittingham Church, 5 miles to the east.

{% leaflet_map { "center" : [55.417997,-2.053994],
                 "zoom" : 12,
                 "providerBasemap": "OpenTopoMap" } %}
          {% leaflet_marker { "latitude" : 55.414786,
                       "longitude" : -2.0348172,
                       "popupContent" : "Nellie Heron's Memorial Stone"} %}	               
    {% leaflet_geojson "/assets/geojson/NellieHerons.geojson" %}
{% endleaflet_map %}
| Map of route taken |
