import Sprinkhaan from './Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan();

let map = L.map('map', {
    attributionControl: false
}).setView([51.7373, 4.2840], 14);
L.tileLayer('http://tilemill.studiofonkel.nl/style/{z}/{x}/{y}.png?id=tmstyle:///home/administrator/styles/haringvliet-2017.tm2&j2oul3e6', {
    detectRetina: true
}).addTo(map);

let marker = L.marker([51.7373, 4.2840]).addTo(map);
//
// let blockZoom = false;
//
// sprinkhaan.on('expanded', () => {
//     blockZoom = true;
// });
//
// sprinkhaan.on('collapsed', () => {
//    setTimeout(() => {
//        blockZoom = false;
//    }, 1000)
// });
//
// map.on('zoomstart', (event) => {
//     if (blockZoom) {
//         event.preventDefault();
//     }
// });

marker.on('click', () => {
    console.log(sprinkhaan.state)

    if (sprinkhaan.state === 'collapsed') {
        sprinkhaan.hide();
    }
    else if (sprinkhaan.state === 'hidden') {
        sprinkhaan.show();
    }
});