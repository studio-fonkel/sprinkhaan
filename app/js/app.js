import Sprinkhaan from './Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan().show();

let map = L.map('map', {
    attributionControl: false
}).setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);