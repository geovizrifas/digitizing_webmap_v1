var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Extent_1 = new ol.format.GeoJSON();
var features_Extent_1 = format_Extent_1.readFeatures(json_Extent_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extent_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extent_1.addFeatures(features_Extent_1);
var lyr_Extent_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extent_1, 
                style: style_Extent_1,
                popuplayertitle: 'Extent',
                interactive: true,
                title: '<img src="styles/legend/Extent_1.png" /> Extent'
            });
var format_route_guide_2 = new ol.format.GeoJSON();
var features_route_guide_2 = format_route_guide_2.readFeatures(json_route_guide_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_guide_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_guide_2.addFeatures(features_route_guide_2);
var lyr_route_guide_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_guide_2, 
                style: style_route_guide_2,
                popuplayertitle: 'route_guide',
                interactive: true,
                title: '<img src="styles/legend/route_guide_2.png" /> route_guide'
            });
var format_Sidewalks_3 = new ol.format.GeoJSON();
var features_Sidewalks_3 = format_Sidewalks_3.readFeatures(json_Sidewalks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sidewalks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sidewalks_3.addFeatures(features_Sidewalks_3);
var lyr_Sidewalks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sidewalks_3, 
                style: style_Sidewalks_3,
                popuplayertitle: 'Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/Sidewalks_3.png" /> Sidewalks'
            });
var format_Railway_Line_4 = new ol.format.GeoJSON();
var features_Railway_Line_4 = format_Railway_Line_4.readFeatures(json_Railway_Line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_Line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_Line_4.addFeatures(features_Railway_Line_4);
var lyr_Railway_Line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_Line_4, 
                style: style_Railway_Line_4,
                popuplayertitle: 'Railway_Line',
                interactive: true,
                title: '<img src="styles/legend/Railway_Line_4.png" /> Railway_Line'
            });
var format_EOP_Roadway_5 = new ol.format.GeoJSON();
var features_EOP_Roadway_5 = format_EOP_Roadway_5.readFeatures(json_EOP_Roadway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EOP_Roadway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EOP_Roadway_5.addFeatures(features_EOP_Roadway_5);
var lyr_EOP_Roadway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EOP_Roadway_5, 
                style: style_EOP_Roadway_5,
                popuplayertitle: 'EOP_Roadway',
                interactive: true,
                title: '<img src="styles/legend/EOP_Roadway_5.png" /> EOP_Roadway'
            });
var format_Driveways_6 = new ol.format.GeoJSON();
var features_Driveways_6 = format_Driveways_6.readFeatures(json_Driveways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveways_6.addFeatures(features_Driveways_6);
var lyr_Driveways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Driveways_6, 
                style: style_Driveways_6,
                popuplayertitle: 'Driveways',
                interactive: true,
                title: '<img src="styles/legend/Driveways_6.png" /> Driveways'
            });
var group_vectors_24th_Jan_26 = new ol.layer.Group({
                                layers: [lyr_Sidewalks_3,lyr_Railway_Line_4,lyr_EOP_Roadway_5,lyr_Driveways_6,],
                                fold: 'open',
                                title: 'vectors_24th_Jan_26'});
var group_vectors_23rd_Jan_26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_23rd_Jan_26'});
var group_vectors_22nd_Jan_26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_22nd_Jan_26'});
var group_vectors_12th_Jan_26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_12th_Jan_26'});
var group_vectors_05th_Jan_26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_05th_Jan_26'});
var group_vectors_29th_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_29th_Dec_25'});
var group_vectors_28th_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_28th_Dec_25'});
var group_vectors_24th_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_24th_Dec_25'});
var group_vectors_21st_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_21st_Dec_25'});
var group_vectors_18th_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_18th_Dec_25'});
var group_vectors_14th_Dec_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_14th_Dec_25'});
var group_vectors_26th_Nov_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_26th_Nov_25'});
var group_vectors_16th_Nov_25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'vectors_16th_Nov_25'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Extent_1.setVisible(true);lyr_route_guide_2.setVisible(true);lyr_Sidewalks_3.setVisible(true);lyr_Railway_Line_4.setVisible(true);lyr_EOP_Roadway_5.setVisible(true);lyr_Driveways_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Extent_1,lyr_route_guide_2,group_vectors_24th_Jan_26];
lyr_Extent_1.set('fieldAliases', {'fid': 'fid', 'MINX': 'MINX', 'MINY': 'MINY', 'MAXX': 'MAXX', 'MAXY': 'MAXY', 'CNTX': 'CNTX', 'CNTY': 'CNTY', 'AREA': 'AREA', 'PERIM': 'PERIM', 'HEIGHT': 'HEIGHT', 'WIDTH': 'WIDTH', });
lyr_route_guide_2.set('fieldAliases', {'fid': 'fid', 'Length': 'Length', });
lyr_Sidewalks_3.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', 'Sidewalk_Segment': 'Sidewalk_Segment', });
lyr_Railway_Line_4.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', });
lyr_EOP_Roadway_5.set('fieldAliases', {'fid': 'fid', 'Road_Name': 'Road_Name', 'Road_Segment': 'Road_Segment', 'From_Intersection': 'From_Intersection', 'To_Intersection': 'To_Intersection', 'Length_ft': 'Length_ft', 'Notes': 'Notes', });
lyr_Driveways_6.set('fieldAliases', {'fid': 'fid', 'Length_ft': 'Length_ft', 'Driveway_Segment': 'Driveway_Segment', });
lyr_Extent_1.set('fieldImages', {'fid': '', 'MINX': '', 'MINY': '', 'MAXX': '', 'MAXY': '', 'CNTX': '', 'CNTY': '', 'AREA': '', 'PERIM': '', 'HEIGHT': '', 'WIDTH': '', });
lyr_route_guide_2.set('fieldImages', {'fid': '', 'Length': '', });
lyr_Sidewalks_3.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', 'Sidewalk_Segment': 'TextEdit', });
lyr_Railway_Line_4.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', });
lyr_EOP_Roadway_5.set('fieldImages', {'fid': 'TextEdit', 'Road_Name': 'TextEdit', 'Road_Segment': 'TextEdit', 'From_Intersection': 'TextEdit', 'To_Intersection': 'TextEdit', 'Length_ft': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Driveways_6.set('fieldImages', {'fid': 'TextEdit', 'Length_ft': 'TextEdit', 'Driveway_Segment': 'TextEdit', });
lyr_Extent_1.set('fieldLabels', {'fid': 'no label', 'MINX': 'no label', 'MINY': 'no label', 'MAXX': 'no label', 'MAXY': 'no label', 'CNTX': 'no label', 'CNTY': 'no label', 'AREA': 'no label', 'PERIM': 'no label', 'HEIGHT': 'no label', 'WIDTH': 'no label', });
lyr_route_guide_2.set('fieldLabels', {'fid': 'no label', 'Length': 'no label', });
lyr_Sidewalks_3.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', 'Sidewalk_Segment': 'no label', });
lyr_Railway_Line_4.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', });
lyr_EOP_Roadway_5.set('fieldLabels', {'fid': 'no label', 'Road_Name': 'no label', 'Road_Segment': 'no label', 'From_Intersection': 'no label', 'To_Intersection': 'no label', 'Length_ft': 'no label', 'Notes': 'no label', });
lyr_Driveways_6.set('fieldLabels', {'fid': 'no label', 'Length_ft': 'no label', 'Driveway_Segment': 'no label', });
lyr_Driveways_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});