document.addEventListener('DOMContentLoaded', function () {

  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    var studentChptBase = L.tileLayer('https://api.mapbox.com/styles/v1/ikadelharder/cj1ocv3gi000a2spfgl8dii3m/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWthZGVsaGFyZGVyIiwiYSI6ImNpeTJjazZueTAwMWkyemxhaXkzamI4emwifQ.txLrrcdZbc6hF4UfpKNClA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mymap);


    /*
    your code will go here
    */

});
