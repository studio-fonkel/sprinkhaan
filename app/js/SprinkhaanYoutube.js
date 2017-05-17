import EventEmitter from 'events';

class SprinkhaanYoutube extends EventEmitter {

    youtubeId = false;
    element = null;
    thumbnail = null;
    iOsLink = null;
    sprinkhaan = false;

    constructor (options) {
        super();
        Object.assign(this, options);

        this.thumbnail = document.createElement('img');
        this.thumbnail.src = `//img.youtube.com/vi/${this.youtubeId}/maxresdefault.jpg`;

        if (this.sprinkhaan.iOs) {
            this.iOsLink = document.createElement('a');
            this.iOsLink.href = `//youtube.com/v/${this.youtubeId}`;
            this.iOsLink.appendChild(this.thumbnail);
            this.element.appendChild(this.iOsLink);
        } else {
            this.element.appendChild(this.thumbnail);

            // this.touchRegion.bind(this.element, 'tap', (event) => {
            //
            // });
        }
    }

}

export default SprinkhaanYoutube;