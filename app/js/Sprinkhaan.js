import EventEmitter from 'events';
import 'web-animations';

class Sprinkhaan extends EventEmitter {

    element = false;
    header = false;
    content = false;
    media = false;

    properties = {
      state: 'collapsed'
    };

    constructor (elementId) {
        super();

        this.element = document.querySelector(elementId);
        if (!this.element) { throw 'Sprinkhaan needs a valid element to function'; }

        this.header = this.element.querySelector('.sprinkhaan-header');
        this.content = this.element.querySelector('.sprinkhaan-content');
        this.media = this.element.querySelector('.sprinkhaan-media');

        if (!this.header || !this.content) { throw 'Sprinkhaan needs valid markup inside the element to function'; }

        this.header.addEventListener('click', () => this.headerClick());

        this.animateToInitialCollapsed();
    }

    headerClick () {
        if (this.state === 'collapsed') {
            this.animateToExpanded();
        }
        else if (this.state === 'expanded') {
            this.animateToCollapsed();
        }
    }

    get state () {
        return this.properties.state;
    }

    set state(state) {
        this.properties.state = state;
    }

    animateToInitialCollapsed () {
        this.state = 'collapsed';
        this.media.style.marginBottom = this.header.clientHeight + 'px';
        this.header.animate({
            transform: ['translateY(100vh) translateY(0)', 'translateY(100vh) translateY(-' + this.header.clientHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 100,
        });
    }

    animateToExpanded () {
        this.state = 'expanded';
        this.header.animate({
            transform: ['translateY(100vh) translateY(-' + this.header.clientHeight + 'px)', 'translateY(' + this.media.clientHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });

        this.media.animate({
            transform: ['translateY(100vh)', 'translateY(0)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });

        this.content.animate({
            transform: ['translateY(100vh)', 'translateY(0)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });
    }

    animateToCollapsed () {
        this.state = 'collapsed';
        this.header.animate({
            transform: ['translateY(' + this.media.clientHeight + 'px)', 'translateY(100vh) translateY(-' + this.header.clientHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });

        this.media.animate({
            transform: ['translateY(0)', 'translateY(100vh)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });

        this.content.animate({
            transform: ['translateY(0)', 'translateY(100vh)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });
    }

}

export default Sprinkhaan;