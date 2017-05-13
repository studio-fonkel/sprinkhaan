import EventEmitter from 'events';
import 'web-animations/web-animations-next.min';

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

class SprinkhaanAnimation extends EventEmitter {

    animations = [];
    animationOptions = {};

    constructor (animationOptions) {
        super();
        this.animationOptions = animationOptions;
    }

    addKeyframeEffect (element, frames) {
        let keyframeEffect = new KeyframeEffect(element, frames, this.animationOptions);
        let animation = new Animation(keyframeEffect, document.timeline);

        let finishedEmitter = () => {
          this.emit('finished')
        };

        animation.onfinish = debounce(finishedEmitter, 300);

        this.animations.push(animation);
    }

    play () {
        this.animations.forEach((animation) => {
            animation.play();
        });

        return this;
    }

    reverse () {
        this.animations.forEach((animation) => {
            animation.reverse();
        });

        return this;
    }

    pause () {
        this.animations.forEach((animation) => {
            animation.pause();
        });

        return this;
    }

    set currentTime (currentTime) {
        this.animations.forEach((animation) => {
            animation._animation.currentTime = currentTime
        })
    }

    get currentTime () {
        return this.animations[0]._animation.currentTime;
    }

    get activeDuration () {
        return this.animations[0].effect.activeDuration;
    }
}

export default SprinkhaanAnimation;