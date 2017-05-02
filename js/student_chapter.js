document.addEventListener('DOMContentLoaded', function () {

            var map = L.map('map').setView([38.0000, -97.0000], 4);
            var lightBase = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW1raCIsImEiOiJjaXpxY3hldzAwMHc3MnFueWlxdHM3dm1uIn0.gAsO-CCt32aUQ9lRuDoYwA', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(map);

map.zoomControl.setPosition("topright")
    
var geolMap = L.esri.dynamicMapLayer({
url:"//certmapper.cr.usgs.gov/arcgis/rest/services/geology/northamerica_gmna/MapServer", 
    opacity: .5
}).addTo(map);
    
var baseMaps = {
    "Basemap": lightBase
    };
    
var overlayMaps = {
    "Geologic Map": geolMap
};
    
L.control.layers(baseMaps, overlayMaps).addTo(map)
    
 var chptLocations = L.esri.featureLayer({
    url: "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Student_Chpt_Points/FeatureServer/0", 
//         pointToLayer: function (geojson, latlng) {
//             return L.circleMarker(latlng, {
//                 color: "green",
//                 radius: 8
//             });
//         }
     }).addTo(map);
    
chptLocations.bindPopup(function (layer) {
    return L.Util.template('<p><b>{College}</b><br>{Location}<br>{Founded}<br><a href="http://aipg.org/studentchapters"> http://aipg.org/studentchapters</a>', layer.feature.properties);
    });

})

function myFunction(){    document.getElementById("myDropdown").classList.toggle("show");
}
    
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
