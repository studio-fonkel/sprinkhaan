import Sprinkhaan from './../../src/js/Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan({
    scrollWheelEnabled: false
});

sprinkhaan.on('animationsCreated', (animations) => {
    animations.popup.addKeyframeEffect(sprinkhaan.elements['header.is-not-sticky'], [
        { paddingLeft: '15px' },
        { paddingLeft: '90px' }
    ]);
});

let map = L.map('map', {
    attributionControl: false,
    zoomControl: false
}).setView([51.7373, 4.2840], 14);

L.tileLayer('http://tilemill.studiofonkel.nl/style/{z}/{x}/{y}.png?id=tmstyle:///home/administrator/styles/haringvliet/base.tm2&j2oul3e6', {
    detectRetina: true
}).addTo(map);

map.on('click', () => {
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