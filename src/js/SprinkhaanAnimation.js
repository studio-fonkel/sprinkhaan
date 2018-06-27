import EventEmitter from './EventEmitter.js';

export default class SprinkhaanAnimation extends EventEmitter {

  constructor(animationOptions) {
    super();
    this.currentFinished = 0;
    this.animations = [];
    this.animationOptions = animationOptions;
  }

  addKeyframeEffect(element, frames, options = {}) {
    let currentOptions = Object.assign(this.animationOptions, options);
    let keyframeEffect = new KeyframeEffect(element, frames, currentOptions);
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

  play() {
    this.animations.forEach((animation) => {
      animation.play();
    });

    return this;
  }

  reverse() {
    this.animations.forEach((animation) => {
      animation.reverse();
    });

    return this;
  }

  pause() {
    this.animations.forEach((animation) => {
      animation.pause();
    });

    return this;
  }

  set currentTime(currentTime) {
    this.animations.forEach((animation) => {
      animation._animation.currentTime = currentTime
    })
  }

  get currentTime() {
    return this.animations[0]._animation.currentTime;
  }

  get activeDuration() {
    return this.animations[0].effect.activeDuration;
  }
}
