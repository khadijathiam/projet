var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CIVD_1 = new ol.format.GeoJSON();
var features_CIVD_1 = format_CIVD_1.readFeatures(json_CIVD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIVD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIVD_1.addFeatures(features_CIVD_1);cluster_CIVD_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CIVD_1
});
var lyr_CIVD_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CIVD_1, 
                style: style_CIVD_1,
                interactive: true,
                title: '<img src="styles/legend/CIVD_1.png" /> CIVD'
            });
var format_Localisationdesdecharges_2 = new ol.format.GeoJSON();
var features_Localisationdesdecharges_2 = format_Localisationdesdecharges_2.readFeatures(json_Localisationdesdecharges_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localisationdesdecharges_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localisationdesdecharges_2.addFeatures(features_Localisationdesdecharges_2);
var lyr_Localisationdesdecharges_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localisationdesdecharges_2, 
                style: style_Localisationdesdecharges_2,
                interactive: true,
                title: '<img src="styles/legend/Localisationdesdecharges_2.png" /> Localisation des décharges'
            });
var format_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3 = new ol.format.GeoJSON();
var features_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3 = format_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.readFeatures(json_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.addFeatures(features_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3);
var lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3, 
                style: style_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3,
                interactive: true,
                title: '<img src="styles/legend/Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.png" /> Structures sanitaire_Hopitaux_XY_Dr_ZTN'
            });
var format_Rgion_4 = new ol.format.GeoJSON();
var features_Rgion_4 = format_Rgion_4.readFeatures(json_Rgion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgion_4.addFeatures(features_Rgion_4);
var lyr_Rgion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgion_4, 
                style: style_Rgion_4,
                interactive: true,
                title: '<img src="styles/legend/Rgion_4.png" /> Région'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CIVD_1.setVisible(true);lyr_Localisationdesdecharges_2.setVisible(true);lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.setVisible(true);lyr_Rgion_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CIVD_1,lyr_Localisationdesdecharges_2,lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3,lyr_Rgion_4];
lyr_CIVD_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Nom': 'Nom', });
lyr_Localisationdesdecharges_2.set('fieldAliases', {'DR': 'DR', 'REGIONS': 'REGIONS', 'DEPARTEMENTS': 'DEPARTEMENTS', 'ARRONDISSEMENTS': 'ARRONDISSEMENTS', 'COMMUNES': 'COMMUNES', 'ADRESSE': 'ADRESSE', 'COORDONNEES X': 'COORDONNEES X', 'COORDONNEES Y': 'COORDONNEES Y', });
lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.set('fieldAliases', {'Hopitaux': 'Hopitaux', 'X': 'X', 'Y': 'Y', });
lyr_Rgion_4.set('fieldAliases', {'SUPERFICE_': 'SUPERFICE_', 'Admi1': 'Admi1', 'Admi2': 'Admi2', 'Admi3': 'Admi3', 'Admi4': 'Admi4', 'NOMREG': 'NOMREG', 'perimetre': 'perimetre', });
lyr_CIVD_1.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Localisationdesdecharges_2.set('fieldImages', {'DR': 'TextEdit', 'REGIONS': 'TextEdit', 'DEPARTEMENTS': 'TextEdit', 'ARRONDISSEMENTS': 'TextEdit', 'COMMUNES': 'TextEdit', 'ADRESSE': 'TextEdit', 'COORDONNEES X': 'TextEdit', 'COORDONNEES Y': 'TextEdit', });
lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.set('fieldImages', {'Hopitaux': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Rgion_4.set('fieldImages', {'SUPERFICE_': 'TextEdit', 'Admi1': 'Range', 'Admi2': 'Range', 'Admi3': 'Range', 'Admi4': 'Range', 'NOMREG': 'TextEdit', 'perimetre': 'TextEdit', });
lyr_CIVD_1.set('fieldLabels', {'X': 'inline label', 'Y': 'inline label', 'Nom': 'inline label', });
lyr_Localisationdesdecharges_2.set('fieldLabels', {'DR': 'no label', 'REGIONS': 'inline label', 'DEPARTEMENTS': 'no label', 'ARRONDISSEMENTS': 'no label', 'COMMUNES': 'no label', 'ADRESSE': 'no label', 'COORDONNEES X': 'inline label', 'COORDONNEES Y': 'inline label', });
lyr_Structuressanitaire_Hopitaux_XY_Dr_ZTN_3.set('fieldLabels', {'Hopitaux': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Rgion_4.set('fieldLabels', {'SUPERFICE_': 'no label', 'Admi1': 'no label', 'Admi2': 'no label', 'Admi3': 'no label', 'Admi4': 'no label', 'NOMREG': 'no label', 'perimetre': 'no label', });
lyr_Rgion_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});