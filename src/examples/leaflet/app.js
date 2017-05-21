import Sprinkhaan from 'studio-fonkel/Sprinkhaan';

let sprinkhaan = new Sprinkhaan();

let map = L.map('map', {
    attributionControl: false,
    zoomControl: false
}).setView([51.7373, 4.2840], 14);

L.tileLayer('http://tilemill.studiofonkel.nl/style/{z}/{x}/{y}.png?id=tmstyle:///home/administrator/styles/haringvliet/base.tm2&j2oul3e6', {
    detectRetina: true
}).addTo(map);

map.on('click', () => {
    console.log(sprinkhaan.state)
    if (sprinkhaan.state === 'collapsed') {
        sprinkhaan.hide()
    }

    if (sprinkhaan.state === 'hidden') {
        sprinkhaan.collapse(() => {
            console.log('test')
        })
    }
});

let marker = L.marker([51.7373, 4.2840]).addTo(map);

marker.on('click', () => {
    if (sprinkhaan.state === 'collapsed') {
        sprinkhaan.hide();
    }
    else if (sprinkhaan.state === 'hidden') {
        sprinkhaan.show();
    }
});