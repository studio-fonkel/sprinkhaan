import EventEmitter from 'events';
import './CallPlayer.js';

class SprinkhaanYoutube extends EventEmitter {

    youtubeId = false;
    element = null;
    thumbnail = null;
    iOsLink = null;
    sprinkhaan = false;
    iframe = null;
    isPlaying = false;

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

            this.element.removeChild(this.thumbnail);
            this.iframe = document.createElement('iframe');
            this.iframe.src = `//www.youtube.com/embed/${this.youtubeId}?enablejsapi=1&wmode=opaque&controls=0`;
            this.iframe.setAttribute('frameborder', 0);
            this.iframe.setAttribute('allowfullscreen', 'allowfullscreen');
            this.iframe.setAttribute('scrolling', 'no');
            this.iframe.setAttribute('autoplay', 'yes');
            this.iframe.id = `sprinkhaan-${this.youtubeId}`;

            this.element.appendChild(this.iframe);

            this.sprinkhaan.touchRegion.bind(this.element, 'tap', (event) => {
                if (event.detail.events[0].originalEvent instanceof TouchEvent) { return; }

                if (this.isPlaying) {
                    callPlayer(this.iframe.id, 'pauseVideo');
                    this.isPlaying = false;
                }
                else {
                    this.isPlaying = true;
                    callPlayer(this.iframe.id, 'playVideo');
                }
            });
        }
    }

}

export default SprinkhaanYoutube;