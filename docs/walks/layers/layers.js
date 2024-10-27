var wms_layers = [];


        var lyr_OpenTopo_0 = new ol.layer.Tile({
            'title': 'OpenTopo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png '
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Walks_2 = new ol.format.GeoJSON();
var features_Walks_2 = format_Walks_2.readFeatures(json_Walks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_2.addFeatures(features_Walks_2);
var lyr_Walks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_2, 
                style: style_Walks_2,
                popuplayertitle: "Walks",
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_2_0.png" /> 8.3 - 10 km<br />\
    <img src="styles/legend/Walks_2_1.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_2_2.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_2_3.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_2_4.png" /> 25 - 62.1 km<br />'
        });

lyr_OpenTopo_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Walks_2.setVisible(true);
var layersList = [lyr_OpenTopo_0,lyr_OpenStreetMap_1,lyr_Walks_2];
lyr_Walks_2.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'Notes': 'Notes', });
lyr_Walks_2.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Walks_2.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'header label - always visible', 'Length': 'inline label - always visible', 'Notes': 'inline label - always visible', });
lyr_Walks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});