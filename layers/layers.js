var wms_layers = [];

var format_KidneyStoneMarketPriority_0 = new ol.format.GeoJSON();
var features_KidneyStoneMarketPriority_0 = format_KidneyStoneMarketPriority_0.readFeatures(json_KidneyStoneMarketPriority_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KidneyStoneMarketPriority_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KidneyStoneMarketPriority_0.addFeatures(features_KidneyStoneMarketPriority_0);
var lyr_KidneyStoneMarketPriority_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KidneyStoneMarketPriority_0, 
                style: style_KidneyStoneMarketPriority_0,
                popuplayertitle: "Kidney Stone Market Priority",
                interactive: true,
    title: 'Kidney Stone Market Priority<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_0.png" /> P1<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_1.png" /> P2<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_2.png" /> P3<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_3.png" /> <br />'
        });
var format_KidneyStone_Risk_1 = new ol.format.GeoJSON();
var features_KidneyStone_Risk_1 = format_KidneyStone_Risk_1.readFeatures(json_KidneyStone_Risk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KidneyStone_Risk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KidneyStone_Risk_1.addFeatures(features_KidneyStone_Risk_1);
var lyr_KidneyStone_Risk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KidneyStone_Risk_1, 
                style: style_KidneyStone_Risk_1,
                popuplayertitle: "Kidney Stone_Risk",
                interactive: true,
    title: 'Kidney Stone_Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_0.png" /> High Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_1.png" /> Low Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_2.png" /> Medium Ris<br />\
    <img src="styles/legend/KidneyStone_Risk_1_3.png" /> <br />'
        });
var format_DehydrationRisk_2 = new ol.format.GeoJSON();
var features_DehydrationRisk_2 = format_DehydrationRisk_2.readFeatures(json_DehydrationRisk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DehydrationRisk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DehydrationRisk_2.addFeatures(features_DehydrationRisk_2);
var lyr_DehydrationRisk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DehydrationRisk_2, 
                style: style_DehydrationRisk_2,
                popuplayertitle: "Dehydration Risk",
                interactive: true,
    title: 'Dehydration Risk<br />\
    <img src="styles/legend/DehydrationRisk_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/DehydrationRisk_2_1.png" /> 0 - 0.22<br />\
    <img src="styles/legend/DehydrationRisk_2_2.png" /> 0.22 - 1.35<br />'
        });
var format_India_markettype_3 = new ol.format.GeoJSON();
var features_India_markettype_3 = format_India_markettype_3.readFeatures(json_India_markettype_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_markettype_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_markettype_3.addFeatures(features_India_markettype_3);
var lyr_India_markettype_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_markettype_3, 
                style: style_India_markettype_3,
                popuplayertitle: "India_market type",
                interactive: true,
    title: 'India_market type<br />\
    <img src="styles/legend/India_markettype_3_0.png" /> Good Ma<br />\
    <img src="styles/legend/India_markettype_3_1.png" /> Average M<br />\
    <img src="styles/legend/India_markettype_3_2.png" /> Must Serve<br />\
    <img src="styles/legend/India_markettype_3_3.png" /> <br />'
        });
var format_India_District_4 = new ol.format.GeoJSON();
var features_India_District_4 = format_India_District_4.readFeatures(json_India_District_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_District_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_District_4.addFeatures(features_India_District_4);
var lyr_India_District_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_District_4, 
                style: style_India_District_4,
                popuplayertitle: "India_District",
                interactive: true,
                title: '<img src="styles/legend/India_District_4.png" /> India_District'
            });

lyr_KidneyStoneMarketPriority_0.setVisible(false);lyr_KidneyStone_Risk_1.setVisible(false);lyr_DehydrationRisk_2.setVisible(false);lyr_India_markettype_3.setVisible(false);lyr_India_District_4.setVisible(true);
var layersList = [lyr_KidneyStoneMarketPriority_0,lyr_KidneyStone_Risk_1,lyr_DehydrationRisk_2,lyr_India_markettype_3,lyr_India_District_4];
lyr_KidneyStoneMarketPriority_0.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_KidneyStone_Risk_1.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_DehydrationRisk_2.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_India_markettype_3.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', });
lyr_India_District_4.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', });
lyr_KidneyStoneMarketPriority_0.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_KidneyStone_Risk_1.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_DehydrationRisk_2.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_India_markettype_3.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', });
lyr_India_District_4.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', });
lyr_KidneyStoneMarketPriority_0.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_KidneyStone_Risk_1.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_DehydrationRisk_2.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_India_markettype_3.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', });
lyr_India_District_4.set('fieldLabels', {'dtname': 'inline label - visible with data', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', });
lyr_India_District_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});