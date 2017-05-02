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

    speed = 300;

    animations = {
        teaser: {},
        popup: {}
    };

    touchRegion = false;
    panningStartTarget = false;

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

                let percentageDone = Math.round(100 / this.animations.popup.contentWrapper.effect.activeDuration * this.animations.popup.contentWrapper._animation.currentTime);
                const threshold = 40;

                if (this.state === 'collapsed') {
                    if (percentageDone > threshold) {
                        this.expand();
                    }
                    else {
                        this.collapse();
                    }
                }
                else {
                    percentageDone = 100 - percentageDone;

                    if (percentageDone > threshold) {
                        this.collapse();
                    }
                    else {
                        this.expand();
                    }
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

                // TODO Add math so we start the animations on the right milliseconds depending on the pixels panned.
                if (!this.isPanning) {
                    this.panningStartTarget = event.detail.events[0].originalEvent.target;
                }

                if (this.state === 'collapsed' && this.panningStartTarget === this.elements['header.is-not-sticky']) {

                    if (event.detail.data[0].currentDirection > 45 && event.detail.data[0].currentDirection < 135 ||
                        event.detail.data[0].currentDirection > 225 && event.detail.data[0].currentDirection < 315
                    ) {
                        if (!this.isPanning) {
                            this.isPanning = true;
                            this.animations.popup.media.pause();
                            this.animations.popup.contentWrapper.pause();
                        }

                        this.animations.popup.media._animation.currentTime = Math.min(this.animations.popup.media.effect.activeDuration - .1, panned);
                        this.animations.popup.contentWrapper._animation.currentTime = Math.min(this.animations.popup.contentWrapper.effect.activeDuration - .1, panned);
                    }
                }

                if (this.state === 'expanded' && this.elements['inner'].scrollTop === 0) {

                    if (event.detail.data[0].currentDirection > 45 && event.detail.data[0].currentDirection < 135 ||
                        event.detail.data[0].currentDirection > 225 && event.detail.data[0].currentDirection < 315
                    ) {
                        if (!this.isPanning) {
                            this.isPanning = true;
                            this.animations.popup.media.pause();
                            this.animations.popup.contentWrapper.pause();
                        }

                        this.animations.popup.media._animation.currentTime = Math.max(0, this.animations.popup.media.effect.activeDuration - panned);
                        this.animations.popup.contentWrapper._animation.currentTime = Math.max(0, this.animations.popup.contentWrapper.effect.activeDuration - panned);
                    }
                }
            }
        });
    }

    createAnimations () {
        // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API

        let finished = () => {
            this.isAnimating = false;
        };

        let teaserKeyFrames = new KeyframeEffect(
            this.elements['content-wrapper'],
            [
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(0)' },
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' }
            ],
            {
                duration: this.speed,
                fill: 'both',
                easing: this.easing
            }
        );

        this.animations.teaser = new Animation(teaserKeyFrames, document.timeline);
        this.animations.teaser.onfinish = finished;

        let popupMediaKeyFrames = new KeyframeEffect(
            this.elements['media'],
            [
                { transform: 'translateY(' + (window.innerHeight - this.elements['header.is-not-sticky'].clientHeight) + 'px)' },
                { transform: 'translateY(0)' }
            ],
            {
                duration: this.speed,
                fill: 'both',
                easing: this.easing
            }
        );

        this.animations.popup.media = new Animation(popupMediaKeyFrames, document.timeline);
        this.animations.popup.media.onfinish = finished;

        let popupContentWrapperKeyFrames = new KeyframeEffect(
            this.elements['content-wrapper'],
            [
                { transform: 'translateY(' + window.innerHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' },
                { transform: 'translateY(' + this.elements['media'].clientHeight + 'px) translateY(0)' }
            ],
            {
                duration: this.speed,
                fill: 'both',
                easing: this.easing
            }
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
        this.element.dataset.preStickyHeader = this.elements['inner'].scrollTop > (this.elements['media'].clientHeight - 50);
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
        this.emit('open');
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