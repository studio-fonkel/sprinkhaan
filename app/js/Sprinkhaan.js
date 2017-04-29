import EventEmitter from 'events';
import 'web-animations';
import 'hammer';

class Sprinkhaan extends EventEmitter {

    element = false;
    wrapper = false;
    stickyHeader = false;
    nonStickyHeader = false;
    content = false;
    media = false;
    inner = false;
    close = false;

    easing = 'cubic-bezier(.61,.14,.5,.93)';

    properties = {
        state: 'collapsed',
        animating: false
    };

    hammertimeHeader = false;
    hammertimeContainer = false;

    constructor (elementId) {
        super();

        this.element = document.querySelector(elementId);
        if (!this.element) { throw 'Sprinkhaan needs a valid element to function'; }

        this.wrapper = this.element.querySelector('.sprinkhaan-content-wrapper');
        this.nonStickyHeader = this.element.querySelector('.sprinkhaan-header.is-not-sticky');
        this.stickyHeader = this.element.querySelector('.sprinkhaan-header.is-sticky');
        this.content = this.element.querySelector('.sprinkhaan-content');
        this.media = this.element.querySelector('.sprinkhaan-media');
        this.inner = this.element.querySelector('.sprinkhaan-inner');
        this.close = this.element.querySelector('.sprinkhaan-close');

        if (!this.nonStickyHeader || !this.content || !this.wrapper) { throw 'Sprinkhaan needs valid markup inside the element to function'; }

        this.nonStickyHeader.addEventListener('click', () => this.headerClick());
        this.stickyHeader.addEventListener('click', () => this.headerClick());
        this.close.addEventListener('click', () => this.closeClick());
        this.inner.addEventListener('scroll', (event) => this.elementScroll(event));
        window.addEventListener('wheel', (event) => this.wheelScroll(event));

        this.hammertimeHeader = new Hammer(this.nonStickyHeader, {});
        this.hammertimeHeader.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

        this.hammertimeHeader.on('swipeup', () => {
            if (!this.animating && this.state === 'collapsed') {
                this.animateToExpanded();
            }
        });

        this.hammertimeContainer = new Hammer(this.media, {});
        this.hammertimeContainer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

        this.hammertimeContainer.on('swipedown', (event) => {
            if (!this.animating && this.state === 'expanded' && this.inner.scrollTop === 0) {
                this.animateToCollapsed();
            }
        });

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

    closeClick () {
        if (this.state === 'expanded') {
            this.animateToCollapsed();
        }
    }

    wheelScroll (event) {
        if (!this.animating) {
            let direction = event.deltaY < 0 ? 'down' : 'up';
            if (event.target === this.nonStickyHeader && this.state === 'collapsed' && direction === 'up' && this.inner.scrollTop === 0) {
                this.animateToExpanded();
            }

            if (this.state === 'expanded' && this.inner.scrollTop === 0 && direction === 'down') {
                this.animateToCollapsed();
            }
        }
    }

    elementScroll () {
        this.element.dataset.stickyHeader = this.inner.scrollTop > this.media.clientHeight;
    }

    get state () {
        return this.properties.state;
    }

    set state(state) {
        this.element.dataset.state = state;
        this.properties.state = state;
    }

    get animating () {
        return this.properties.animating;
    }

    set animating(state) {
        this.element.dataset.animating = state;
        this.properties.animating = state;
    }

    animateToInitialCollapsed () {
        this.state = 'collapsed';
        this.content.style.marginTop = this.nonStickyHeader.clientHeight + 'px';

        this.media.animate({
            transform: ['translateY(' + window.innerHeight + 'px)', 'translateY(' + window.innerHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 0
        });

        this.wrapper.animate({
            transform: ['translateY(' + window.innerHeight + 'px) translateY(0)', 'translateY(' + window.innerHeight + 'px) translateY(-' + this.nonStickyHeader.clientHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 100,
            easing: this.easing
        });
    }

    animateToExpanded () {
        this.state = 'expanded';
        this.animating = true;
        this.wrapper.animate({
            transform: ['translateY(' + window.innerHeight + 'px) translateY(-' + this.nonStickyHeader.clientHeight + 'px)', 'translateY(' + this.media.clientHeight + 'px)'],
        }, {
            fill: 'forwards',
            duration: 300,
        });

        let animation = this.media.animate({
            transform: ['translateY(' + window.innerHeight + 'px)', 'translateY(0)'],
        }, {
            fill: 'forwards',
            duration: 330,
            easing: this.easing
        });

        animation.onfinish = () => {
          this.animating = false;
        };
    }

    animateToCollapsed () {
        this.scrollToTop(this.inner, () => {
            this.animating = true;
            this.state = 'collapsed';
            this.wrapper.animate({
                transform: ['translateY(' + this.media.clientHeight + 'px)', 'translateY(' + window.innerHeight + 'px) translateY(-' + this.nonStickyHeader.clientHeight + 'px)'],
            }, {
                fill: 'forwards',
                duration: 300,
                easing: this.easing
            });

            let animation = this.media.animate({
                transform: ['translateY(0)', 'translateY(' + window.innerHeight + 'px)'],
            }, {
                fill: 'forwards',
                duration: 300,
                easing: this.easing
            });

            animation.onfinish = () => {
                this.animating = false;
            };
        });
    }

    scrollToTop (element, callback) {
        if (element.scrollTop !== 0) {
            setTimeout(() => {
                element.scrollTop = element.scrollTop - 50;
                this.scrollToTop(element, callback);
            }, 1000 / 60);
        }
        else {
            callback();
        }
    }

    hide () {
        this.animating = true;
        this.state = 'hidden';
        let animation = this.wrapper.animate({
            transform: ['translateY(' + window.innerHeight + 'px) translateY(-' + this.nonStickyHeader.clientHeight + 'px)', 'translateY(' + window.innerHeight + 'px) translateY(0)'],
        }, {
            fill: 'forwards',
            duration: 100,
            easing: this.easing
        });

        animation.onfinish = () => {
            this.animating = false;
        };
    }

}

export default Sprinkhaan;