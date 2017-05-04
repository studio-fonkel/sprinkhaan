import Sprinkhaan from './Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan({
    selector: '#sprinkhaan',
    speed: 700
}).show();

// sprinkhaan.on('open', function () {
//     alert('test')
// })

// var mymap = L.map('mapid', {
//     attributionControl: false,
// }).setView([51.505, -0.09], 13);
//
// L.tileLayer('http://tilemill.studiofonkel.nl/style/{z}/{x}/{y}.png?id=tmstyle:///home/administrator/styles/haringvliet-2017.tm2&j256br7y', {
//     detectRetina: true,
// }).addTo(mymap);
//
// var marker = L.marker([51.5, -0.09]).addTo(mymap);
//
// marker.on('click', function () {
//     sprinkhaan.show();
// })