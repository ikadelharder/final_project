document.addEventListener('DOMContentLoaded', function () {

    var mymap = L.map('mapid').setView([38.0000, -97.0000], 5);
    var lightBase = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW1raCIsImEiOiJjaXpxY3hldzAwMHc3MnFueWlxdHM3dm1uIn0.gAsO-CCt32aUQ9lRuDoYwA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mymap);

    var pointStyle = {
        "color": "darkgreen",
        "weight": 5,
        "opacity": 0.65,
    };

    fetch('features.geojson')
        .then(function (response) {
            return
            response.json();
        })
        .then(function (geojson) {
            L.geoJSON(geojson, {
                style: pointStyle
            }).addTo(map);
        });

    L.geoJSON(geojson, {
        style: pointStyle
    }).addTo(map);

        L.geoJson('features.geojson', {
            style: function (feature) {
                return {
                    color: feature.properties.color
                };
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.description);
            }
        }).addTo(mymap);

    //function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    // if (feature.properties && feature.properties.popupContent) {
    //   layer.bindPopup(feature.properties.popupContent);
    // }
    //}
    // var geojsonFeature = {
    // "type": "Feature",
    // "properties": {
    //  "College": "Wright State University",
    // "Location": "Dayton, Ohio",
    // "Founded": "Founded in 1996"
    // "popupContent": "This is where the Rockies play!"
    // },
    // "geometry": {
    //  "type": "Point",
    // "coordinates": [-104.99404, 39.75621]
    // }


L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);
//var baseGeol = L.tileLayer.wms("https://mrdata.usgs.gov/wfs/kb?request=getfeature&service=WFS&version=1.1.0&typename=Geology,Faults&maxfeatures=10", {
//layers: 'nexrad-n0r-900913',
//format: 'image/png',
//transparent: true,
//attribution: "Weather data © 2012 IEM Nexrad"


});
