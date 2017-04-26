document.addEventListener('DOMContentLoaded', function () {

  var mymap = L.map('mapid').setView([38.0000, -97.0000], 5);
    var studentChptBase = L.tileLayer('https://api.mapbox.com/styles/v1/imkh/cj1uwhgey00032rqh52dk93hy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW1raCIsImEiOiJjaXpxY3hldzAwMHc3MnFueWlxdHM3dm1uIn0.gAsO-CCt32aUQ9lRuDoYwA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mymap);


    /*
    your code will go here
    */

});
