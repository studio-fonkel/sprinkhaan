import EventEmitter from 'events';
import 'web-animations/web-animations-next.min';
import ZingTouch from 'zingtouch';
import SprinkhaanAnimation from './SprinkhaanAnimation.js';
import SprinkhaanYoutube from './SprinkhaanYoutube.js';

import './shims_for_IE.js';
import './es6-shim.js'

class Sprinkhaan extends EventEmitter {

    prefix = '.sprinkhaan-';
    easing = 'cubic-bezier(.61,.14,.5,.93)';
    selector = '#sprinkhaan';
    speed = 300;
    threshold = 30;

    iOs = false;
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

    panDirection = 'down';

    animations = {
        teaser: {},
        popup: {}
    };

    boundEvents = {};

    touchRegion = undefined;
    panningStartTarget = false;
    panningStartY = false;

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
        this.iOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        Object.keys(this.elements).forEach((subElement) => {
            this.elements[subElement] = this.element.querySelector(this.prefix + subElement);
        });

        this.elements['content'].style.marginTop = this.elements['header.is-not-sticky'].clientHeight + 'px';
        if (this.elements['media']) {
            this.elements['media'].style.width = this.element.clientWidth + 'px';
        }
        this.elements['content-wrapper'].style.width = this.element.clientWidth + 'px';
        this.elements['header.is-not-sticky'].style.width = this.element.clientWidth + 'px';
        this.elements['header.is-sticky'].style.width = this.element.clientWidth + 'px';

        if (window.innerWidth > this.element.clientWidth) {
            this.element.style.height = Math.min(this.element.clientHeight, this.elements['content-wrapper'].clientHeight + (this.elements['media'] ? this.elements['media'].clientHeight : 0)) + 'px';
        }
        else {
            this.elements['content'].style.minHeight = (window.innerHeight - (this.elements['media'] ? this.elements['media'].clientHeight : 0) - this.elements['header.is-sticky'].clientHeight) + 'px';
        }

        this.createAnimations();
        this.attachEventListeners();
        this.updateDataAttributes();

        if (this.elements['media'] && this.elements['media'].dataset.youtube) {
            this.youtube = new SprinkhaanYoutube({
                youtubeId: this.elements['media'].dataset.youtube,
                element: this.elements['media'],
                sprinkhaan: this,
            });
        }


    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
    createAnimations () {
        let finished = () => {
            this.isAnimating = false;

            // Somehow we need to recreate the animations on each end.
            // It could be I don't understand correctly how it works.
            // TODO find out why.
            this.createAnimations();
        };

        let animationOptions = {
            duration: this.speed,
            fill: 'both',
            easing: this.easing
        };

        this.animations.teaser = new SprinkhaanAnimation(animationOptions);
        this.animations.popup = new SprinkhaanAnimation(animationOptions);

        this.animations.teaser.on('finished', finished);
        this.animations.popup.on('finished', finished);

        // This one simply hides the media object from appearing when using the hide method.
        this.animations.teaser.addKeyframeEffect(this.elements['media'], [
            { transform: 'translateY(' + this.element.clientHeight + 'px)' },
            { transform: 'translateY(' + this.element.clientHeight + 'px)' }
        ]);

        this.animations.teaser.addKeyframeEffect(this.elements['content-wrapper'], [
            { transform: 'translateY(' + this.element.clientHeight + 'px) translateY(0)' },
            { transform: 'translateY(' + this.element.clientHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' }
        ]);

        if (window.innerWidth <= this.element.clientWidth) {
            this.animations.popup.addKeyframeEffect(this.elements['inner'], [
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                { backgroundColor: 'rgba(0, 0, 0, .8)' }
            ]);
        }

        /*
        this.animations.popup.addKeyframeEffect(this.elements['media'], [
            { opacity: '.5' },
            { opacity: '1' }
        ]);
        */

        this.animations.popup.addKeyframeEffect(this.elements['media'], [
            { transform: 'translateY(' + (this.element.clientHeight) + 'px)' },
            { transform: 'translateY(' + (this.element.clientHeight - this.elements['header.is-not-sticky'].clientHeight) + 'px)', offset: 0.01 },
            { transform: 'translateY(0)' }
        ]);

        this.animations.popup.addKeyframeEffect(this.elements['content-wrapper'], [
            { transform: 'translateY(' + this.element.clientHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' },
            { transform: 'translateY(' + (this.elements['media'] ? this.elements['media'].clientHeight : 0) + 'px) translateY(0)' }
        ]);
    }

    attachEventListeners () {
        this.touchRegion = new ZingTouch.Region(document.body, false, false);

        // In some cases zingTouch gives a tap via a mouse click and a touchdown event.
        // For example when you debug via chrome with mobile simulator.
        // Hence the debounce.
        this.touchRegion.bind(this.elements['close-button'], 'tap', this.debounce(() => this.collapse()), 40);
        this.touchRegion.bind(this.elements['header.is-not-sticky'], 'tap', this.debounce(() => this.expand()), 40);
        this.touchRegion.bind(this.element, 'pan', (event) => this.pan(event));

        // These handlers need unbind, see destroy().
        this.boundEvents = {
            resize: (event) => this.resizeWindow(event),
            orientationchange: (event) => this.resizeWindow(event),
            touchend: (event) => this.panEnd(event),
            mouseup: (event) => this.panEnd(event),
            scroll: (event) => this.elementScroll(event),
            wheel: (event) => this.wheelScroll(event),
        };

        window.addEventListener('resize', this.boundEvents.resize);
        window.addEventListener('orientationchange', this.boundEvents.orientationchange);
        document.body.addEventListener('touchend', this.boundEvents.touchend);
        document.body.addEventListener('mouseup', this.boundEvents.mouseup);
        this.elements['inner'].addEventListener('scroll', this.boundEvents.scroll);
        window.addEventListener('wheel', this.boundEvents.wheel, { passive: true });
    }

    resizeWindow () {
        this.animations.popup.pause();

        // TODO add state hidden.
        if (this.state === 'collapsed') {
            this.animations.popup.currentTime = 0;
        }

        if (this.state === 'expanded') {
            this.animations.popup.currentTime = this.speed;
        }

        this.createAnimations();
    }

    panStart (event) {
        this.panningStartTarget = this.getSprinkhaanParentOfElement(event.detail.events[0].originalEvent.target);

        if (!this.panningStartTarget) { return; }

        this.isPanning = true;
        this.animations.popup.pause();
        this.panningStartY = event.detail.events[0].clientY;
    }

    pan (event) {
        // Shorter references so the code below is readable.
        let popupAnimation = this.animations.popup;
        this.panDirection = (event.detail.data[0].currentDirection >= 0 && event.detail.data[0].currentDirection <= 180) ? 'up' : 'down';
        let els = this.elements;

        if (this.iOs) {
            if (this.isPanning && this.state === 'expanded' && els['inner'].scrollTop === 0 && this.panDirection === 'down' ||
                this.state === 'collapsed') {
                (event.detail.events).forEach( _e => _e.originalEvent.preventDefault());
            }
        }

        if (this.resetPanningStartY) {
            this.resetPanningStartY = false;
            this.panningStartY = event.detail.events[0].clientY;
        }

        if (this.isAnimating) { return; }
        if (!this.isPanning) { this.panStart(event); }
        if (!this.panningStartTarget) { return; }

        let offset = event.detail.events[0].clientY - this.panningStartY;
        let msPerPx = popupAnimation.activeDuration / (this.element.clientHeight - (els['media'] ? els['media'].offsetHeight : 0) - els['header.is-not-sticky'].offsetHeight);
        let animationPosition = offset * msPerPx;

        if (this.state === 'collapsed' && this.panningStartTarget === els['header.is-not-sticky']) {
            let animationPosition = Math.max(0 - offset, 0) * msPerPx;

            // If you pan the popup up and you let it stop at 100% the web animation starts to play again.
            // So we want it to stop at 99.9% or the current position.
            popupAnimation.currentTime = Math.min(popupAnimation.activeDuration - .1, animationPosition);
        }

        if (this.state === 'expanded' && [els['content'], els['header.is-not-sticky'], els['media']].includes(this.panningStartTarget) && els['inner'].scrollTop === 0) {

            // Animating where the user drag the media element
            if (this.panningStartTarget === els['media']) {
                // We need to recalculate these items for the media animation.
                msPerPx = popupAnimation.activeDuration / (this.element.clientHeight - els['header.is-not-sticky'].offsetHeight);
                animationPosition = offset * msPerPx;

                // We want the animation to start at 0 not before it.
                popupAnimation.currentTime = Math.min(Math.max(0, popupAnimation.activeDuration - animationPosition), this.speed);
            }

            // Animating where the user drag the header or the content element
            if ([els['content'], els['header.is-not-sticky']].includes(this.panningStartTarget)) {
                // We want the animation to start at 0 not before it.
                popupAnimation.currentTime = Math.min(Math.max(0, popupAnimation.activeDuration - animationPosition), this.speed);
            }
        }

        this.updateDataAttributes();
    }

    panEnd (event) {
        if (!this.isPanning) { return; }
        if (!this.panningStartTarget) { return; }

        this.panningStartY = false;
        let percentageDone = Math.round(100 / this.animations.popup.activeDuration * this.animations.popup.currentTime);

        // No need to react.
        if (percentageDone === 100 && this.state === 'expanded' && this.panDirection === 'up' ||
            percentageDone === 100 && this.state === 'expanded' && this.panDirection === 'down'
        ) {
            this.isPanning = false;
            return;
        }

        // The following logic allows the popup to close or open depending on the percentage dragged.
        if (this.state === 'collapsed') {
            if (percentageDone > this.threshold) {
                this.expand();
            }
            else if (percentageDone !== 0) {
                this.collapse();
            }
        }
        else if (this.state === 'expanded') {
            percentageDone = 100 - percentageDone;

            if (percentageDone > this.threshold) {
                this.collapse();
            }
            else {
                this.expand();
            }
        }

        this.isPanning = false;
    }

    wheelScroll (event) {
        if (this.isAnimating) { return; }
        let direction = event.deltaY < 0 ? 'down' : 'up';

        // The user has a mouse and scrolls on the header.
        if (event.target === this.elements['header.is-not-sticky'] &&
            this.state === 'collapsed' && direction === 'up' && this.elements['inner'].scrollTop === 0) {
            this.expand();
        }

        // If the user has a mouse en scrolls in the popup down.
        if (this.state === 'expanded' && this.elements['inner'].scrollTop === 0 && direction === 'down') {
            this.collapse();
        }
    }

    elementScroll (event) {
        if (this.isAnimating && !this.isScrollingToTop) {
            this.elements['inner'].scrollTop = 0;
        }

        if (this.elements['inner'].scrollTop === 0 && this.previousScrollTop !== 0) {
            this.resetPanningStartY = true;
        }

        this.previousScrollTop = this.elements['inner'].scrollTop;
        this.updateDataAttributes();
    }

    updateDataAttributes () {
        this.element.dataset.preStickyHeader = this.elements['inner'].scrollTop > ((this.elements['media'] ? this.elements['media'].clientHeight : 0) - 50);
        this.element.dataset.stickyHeader = this.elements['inner'].scrollTop > (this.elements['media'] ? this.elements['media'].clientHeight : 0);
        this.element.dataset.mediaEnabled = this.elements['inner'].scrollTop === 0 && this.state === 'expanded' && !this.isAnimating;
        this.element.dataset.isPanning = this.isPanning;
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

    expand (callback) {
        if (this.isAnimating || this.state === 'expanded' && !this.isPanning) {
            if (typeof callback === 'function') {
                callback();
            }
            return this;
        }

        this.state = 'expanded';
        this.isAnimating = true;
        this.animations.popup.once('finished', () => {
            this.emit('expanded');
            if (typeof callback === 'function') {
                callback();
            }

            this.updateDataAttributes();
        });

        this.animations.popup.play();

        return this;
    }

    collapse (callback) {
        if (this.isAnimating || this.state !== 'expanded' && !this.isPanning) {
            if (typeof callback === 'function') {
                callback();
            }
            return this;
        }

        this.scrollToTop(this.elements['inner'], () => {
            this.state = 'collapsed';

            this.animations.popup.once('finished', () => {
                this.emit('collapsed');
                if (typeof callback === 'function') {
                    callback();
                }

                this.updateDataAttributes();
            });

            this.isAnimating = true;
            this.animations.popup.reverse();
        });

        return this;
    }

    show (callback) {
        let finished = () => {
            this.state = 'collapsed';
            this.emit('collapsed');
            if (typeof callback === 'function') {
                callback();
            }
            this.updateDataAttributes();
        };

        if (this.state !== 'hidden') {
            finished();
        }
        else {
            this.animations.teaser.once('finished', () => {
                finished();
            });

            this.animations.teaser.play();
        }

        return this;
    }

    hide (callback) {
        let finished = () => {
            this.emit('hidden');
            this.state = 'hidden';
            if (typeof callback === 'function') {
                callback();
            }
            this.updateDataAttributes();
        };

        if (this.state !== 'collapsed') {
            finished();
        }
        else {
            this.animations.teaser.once('finished', () => {
                finished();
            });

            this.animations.teaser.reverse();
        }

        return this;
    }

    detachEventListeners () {
        this.touchRegion.unbind(this.elements['close-button']);
        this.touchRegion.unbind(this.elements['header.is-not-sticky']);
        this.touchRegion.unbind(this.element);

        window.removeEventListener('resize', this.boundEvents.resize);
        window.removeEventListener('orientationchange', this.boundEvents.orientationchange);
        document.body.removeEventListener('touchend', this.boundEvents.touchend);
        document.body.removeEventListener('mouseup', this.boundEvents.mouseup);
        this.elements['inner'].removeEventListener('scroll', this.boundEvents.scroll);
        window.removeEventListener('wheel', this.boundEvents.wheel);

        this.emit('destroyed');
    }

    destroy (callback) {
        this.detachEventListeners();

        this.collapse(() => {
            this.hide(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        });
    }

    scrollToTop (element, callback) {
        this.isScrollingToTop = true;
        if (element.scrollTop !== 0) {
            setTimeout(() => {
                element.scrollTop = Math.max(element.scrollTop - 50, 0);
                this.scrollToTop(element, callback);
            }, 1000 / 60);
        }
        else {
            this.isScrollingToTop = false;
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    getSprinkhaanParentOfElement (element) {
        let sprinkhaanElement = false;

        let sprinkhaanElements = [];
        Object.keys(this.elements).forEach((className) => {
            sprinkhaanElements.push(this.elements[className]);
        });

        while (element) {
            if (!sprinkhaanElement && sprinkhaanElements.includes(element)) {
                sprinkhaanElement = element;
            }

            element = element.parentNode;
        }

        return sprinkhaanElement;
    }

    debounce (func, wait, immediate) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

}

export default Sprinkhaan;