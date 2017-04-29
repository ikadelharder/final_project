document.addEventListener('DOMContentLoaded', function () {

            var map = L.map('map').setView([38.0000, -97.0000], 5);
            var lightBase = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW1raCIsImEiOiJjaXpxY3hldzAwMHc3MnFueWlxdHM3dm1uIn0.gAsO-CCt32aUQ9lRuDoYwA', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(map);
    
var chptLocations = L.esri.featureLayer({
    url: "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Student_Chpt_Points/FeatureServer/0"
  }).addTo(map);
    
    chptLocations.bindPopup(function (layer) {
                            return L.Util.template('<p><b>{College}</b><br>{Location}<br>{Founded}', layer.feature.properties);
                            });

})