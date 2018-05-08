import EventEmitter from './EventEmitter.js';
import './CallPlayer.js';

class SprinkhaanYoutube extends EventEmitter {

  constructor(options) {
    super();

    this.youtubeId = false;
    this.element = null;
    this.thumbnail = null;
    this.iOsLink = null;
    this.sprinkhaan = false;
    this.iframe = null;
    this.isPlaying = false;

    Object.assign(this, options);

    this.thumbnail = document.createElement('img');
    this.thumbnail.src = `//img.youtube.com/vi/${this.youtubeId}/maxresdefault.jpg`;

    if (this.sprinkhaan.iOs) {
      this.iOsLink = document.createElement('a');
      this.iOsLink.href = `//youtube.com/watch?v=${this.youtubeId}`;
      this.iOsLink.appendChild(this.thumbnail);
      this.element.appendChild(this.iOsLink);
    } else {
      this.element.appendChild(this.thumbnail);

      this.element.removeChild(this.thumbnail);
      this.iframe = document.createElement('iframe');
      this.iframe.src = `//www.youtube.com/embed/${this.youtubeId}?enablejsapi=1&wmode=opaque&controls=0&rel=0&showinfo=0&modestbranding=0`;
      this.iframe.setAttribute('allowfullscreen', 'allowfullscreen');
      this.iframe.setAttribute('scrolling', 'no');
      this.iframe.setAttribute('frameborder', 0);
      this.iframe.setAttribute('autoplay', 1);
      this.iframe.setAttribute('modestbranding', 1);
      this.iframe.setAttribute('autohide', 1);
      this.iframe.setAttribute('showinfo', 0);
      this.iframe.setAttribute('controls', 0);
      this.iframe.setAttribute('rel', 0);

      this.iframe.id = `sprinkhaan-${this.youtubeId}`;

      this.element.appendChild(this.iframe);

      this.sprinkhaan.touchRegion.bind(this.element, 'tap', (event) => {
        if (event.detail.events[0].originalEvent instanceof TouchEvent) {
          return;
        }

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
