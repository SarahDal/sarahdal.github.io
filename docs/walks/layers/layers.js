var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenTopo_1 = new ol.layer.Tile({
            'title': 'OpenTopo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png '
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Walks_3 = new ol.format.GeoJSON();
var features_Walks_3 = format_Walks_3.readFeatures(json_Walks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_3.addFeatures(features_Walks_3);
var lyr_Walks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_3, 
                style: style_Walks_3,
                popuplayertitle: "Walks",
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_3_0.png" /> 8.3 - 10 km<br />\
    <img src="styles/legend/Walks_3_1.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_3_2.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_3_3.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_3_4.png" /> 25 - 62.1 km<br />'
        });

lyr_BingAerial_0.setVisible(true);lyr_OpenTopo_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Walks_3.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_OpenTopo_1,lyr_OpenStreetMap_2,lyr_Walks_3];
lyr_Walks_3.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'Notes': 'Notes', 'link': 'link', });
lyr_Walks_3.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', 'link': 'TextEdit', });
lyr_Walks_3.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'header label - always visible', 'Length': 'inline label - always visible', 'Notes': 'inline label - always visible', 'link': 'no label', });
lyr_Walks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});