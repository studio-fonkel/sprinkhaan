import Sprinkhaan from './Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan().show();

setTimeout(function () {
    sprinkhaan.destroy(() => {
        alert('yo')
    })
}, 5000)