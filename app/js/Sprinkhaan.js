import EventEmitter from 'events';
import 'web-animations/web-animations-next.min';
import ZingTouch from 'zingtouch';

class Sprinkhaan extends EventEmitter {

    prefix = '.sprinkhaan-';
    easing = 'cubic-bezier(.61,.14,.5,.93)';

    selector = '#sprinkhaan';
    element = false;
    elements = {
        'content-wrapper': false,
        'header.is-sticky': false,
        'header.is-not-sticky': false,
        'content': false,
        'media': false,
        'inner': false,
        'close-button': false
    };

    animations = {
        teaser: {},
        popup: {}
    };

    touchRegion = false;

    properties = {
        state: 'hidden',
        isAnimating: false,
        isPanning: false
    };

    constructor (options) {
        super();
        Object.assign(this, options);

        this.element = document.querySelector(this.selector);
        if (!this.element) { throw 'Sprinkhaan needs a valid element to function'; }

        Object.keys(this.elements).forEach((subElement, delta) => {
            this.elements[subElement] = this.element.querySelector(this.prefix + subElement);
        });

        this.elements['content'].style.marginTop = this.elements['header.is-not-sticky'].clientHeight + 'px';
        this.createAnimations();
        this.attachEventHandlers();
    }

    attachEventHandlers () {
        let panStop = () => {
            if (this.isPanning) {
                this.isPanning = false;

                if (this.state === 'collapsed') {
                    this.expand();
                }
                else {
                    this.collapse();
                }
            }
        };

        this.element.addEventListener('touchend', panStop);

        this.element.addEventListener('mouseup', panStop);

        this.touchRegion = new ZingTouch.Region(document.body);

        this.elements['inner'].addEventListener('scroll', (event) => this.elementScroll(event));
        window.addEventListener('wheel', (event) => this.wheelScroll(event));

        this.touchRegion.bind(this.elements['close-button'], 'tap', () => {
            if (this.state === 'expanded') {
                this.collapse();
            }
        });

        this.touchRegion.bind(this.elements['header.is-not-sticky'], 'tap', () => {
            if (this.state === 'collapsed') {
                this.expand();
            }
        });

        this.touchRegion.bind(this.elements['header.is-not-sticky'], 'swipe', (event) => {
            if (event.detail.data[0].currentDirection > 45 && event.detail.data[0].currentDirection < 135) {
                if (this.state === 'collapsed') {
                    this.expand();
                }
            }
        });

        this.touchRegion.bind(this.element, 'swipe', (event) => {
            if (event.detail.data[0].currentDirection > 225 && event.detail.data[0].currentDirection < 315) {
                if (this.state === 'expanded' && this.elements['inner'].scrollTop === 0) {
                    this.collapse();
                }
            }
        });

        this.touchRegion.bind(this.element, 'pan', (event) => {
            if (!this.isAnimating) {
                let panned = event.detail.data[0].distanceFromOrigin;

                if (event.detail.data[0].currentDirection > 45 && event.detail.data[0].currentDirection < 135 && this.state === 'collapsed') {
                    this.isPanning = true;

                    this.animations.popup.media._animation.currentTime = panned;
                    this.animations.popup.media.pause();

                    this.animations.popup.contentWrapper._animation.currentTime = panned;
                    this.animations.popup.contentWrapper.pause();

                }

                if (event.detail.data[0].currentDirection > 225 && event.detail.data[0].currentDirection < 315 && this.state === 'expanded') {
                    this.isPanning = true;

                    this.animations.popup.media._animation.currentTime = 300 - panned;
                    this.animations.popup.media.pause();

                    this.animations.popup.contentWrapper._animation.currentTime = 330 - panned;
                    this.animations.popup.contentWrapper.pause();
                }
            }
        });
    }

    createAnimations () {
        let finished = () => {
            this.isAnimating = false;
        };

        let teaserKeyFrames = new KeyframeEffect(
            this.elements['content-wrapper'],
            [
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(0)' },
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' }
            ],
            { duration: 300, fill: 'both' }
        );

        this.animations.teaser = new Animation(teaserKeyFrames, document.timeline);
        this.animations.teaser.onfinish = finished;

        let popupMediaKeyFrames = new KeyframeEffect(
            this.elements['media'],
            [
                { transform: 'translateY(' + window.innerHeight + 'px)' },
                { transform: 'translateY(0)' }
            ],
            { duration: 300, fill: 'both' }
        );

        this.animations.popup.media = new Animation(popupMediaKeyFrames, document.timeline);
        this.animations.popup.media.onfinish = finished;

        let popupContentWrapperKeyFrames = new KeyframeEffect(
            this.elements['content-wrapper'],
            [
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' },
                { transform: 'translateY(' + this.elements['media'].clientHeight + 'px) translateY(0)' }
            ],
            { duration: 300, fill: 'both' }
        );

        this.animations.popup.contentWrapper = new Animation(popupContentWrapperKeyFrames, document.timeline);
        this.animations.popup.contentWrapper.onfinish = finished;
    }

    wheelScroll (event) {
        if (!this.isAnimating) {
            let direction = event.deltaY < 0 ? 'down' : 'up';
            if (event.target === this.elements['header.is-not-sticky'] && this.state === 'collapsed' && direction === 'up' && this.elements['inner'].scrollTop === 0) {
                this.expand();
            }

            if (this.state === 'expanded' && this.elements['inner'].scrollTop === 0 && direction === 'down') {
                this.collapse();
            }
        }
    }

    elementScroll () {
        this.element.dataset.stickyHeader = this.elements['inner'].scrollTop > this.elements['media'].clientHeight;
    }

    get state () {
        return this.properties.state;
    }

    set state(state) {
        this.element.dataset.state = state;
        this.properties.state = state;
    }

    get isAnimating () {
        return this.properties.isAnimating;
    }

    set isAnimating(state) {
        this.element.dataset.animating = state;
        this.properties.isAnimating = state;
    }

    get isPanning () {
        return this.properties.isPanning;
    }

    set isPanning(state) {
        this.properties.isPanning = state;
    }

    expand () {
        this.isAnimating = true;
        this.state = 'expanded';
        this.animations.popup.media.play();
        this.animations.popup.contentWrapper.play();
        this.createAnimations();
        return this;
    }

    collapse () {
        this.scrollToTop(this.elements['inner'], () => {
            this.isAnimating = true;
            this.state = 'collapsed';
            this.animations.popup.media.reverse();
            this.animations.popup.contentWrapper.reverse();
            this.createAnimations();
        });

        return this;
    }

    show () {
        this.state = 'collapsed';
        this.animations.teaser.play();
        return this;
    }

    hide () {
        this.animations.teaser.reverse();
        this.state = 'hidden';
        return this;
    }

    getTransformyFromElement(element) {
        let computedStyle = window.getComputedStyle(element, null);
        let transform = computedStyle.getPropertyValue("-webkit-transform") ||
            computedStyle.getPropertyValue("-moz-transform") ||
            computedStyle.getPropertyValue("-ms-transform") ||
            computedStyle.getPropertyValue("-o-transform") ||
            computedStyle.getPropertyValue("transform");

        return parseFloat(transform.split(',')[5].replace(')', ''));
    }

    destroy () {

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

}

export default Sprinkhaan;