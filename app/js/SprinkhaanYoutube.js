import EventEmitter from 'events';

class SprinkhaanYoutube extends EventEmitter {

    youtubeId = false;
    element = false;
    thumbnail = false;

    constructor (options) {
        super();
        Object.assign(this, options);

        this.thumbnail = document.createElement('img');
        this.thumbnail.src = `//img.youtube.com/vi/${this.youtubeId}/maxresdefault.jpg`;

        this.element.appendChild(this.thumbnail);
    }

}

export default SprinkhaanYoutube;