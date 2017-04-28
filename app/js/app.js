import Sprinkhaan from './Sprinkhaan.js';

let sprinkhaan = new Sprinkhaan('#sprinkhaan');

document.body.addEventListener('click', (event) => {
    if (event.target === document.body) {
        if (sprinkhaan.state === 'collapsed') {
            sprinkhaan.hide();
        }
        else if (sprinkhaan.state === 'hidden') {
            sprinkhaan.animateToInitialCollapsed();
        }
    }
});