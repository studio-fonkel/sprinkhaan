import EventEmitter from 'events';
import 'web-animations/web-animations-next.min';

class SprinkhaanAnimation extends EventEmitter {

    currentFinished = 0;
    animations = [];
    animationOptions = {};

    constructor (animationOptions) {
        super();
        this.animationOptions = animationOptions;
    }

    addKeyframeEffect (element, frames) {
        let keyframeEffect = new KeyframeEffect(element, frames, this.animationOptions);
        let animation = new Animation(keyframeEffect, document.timeline);

        animation.onfinish = () => {
            this.currentFinished++;

            if (this.currentFinished === this.animations.length) {
                this.currentFinished = 0;
                this.emit('finished')
            }
        };

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