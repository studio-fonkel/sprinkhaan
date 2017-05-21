# Sprinkhaan

An ES6 library to create a popover for use with maps on mobile devices. Sprinkhaan is the dutch word for Mantis.

Example:

[![Sprinkhaan Example](https://raw.githubusercontent.com/studio-fonkel/sprinkhaan/master/sprinkhaan.gif)](https://www.youtube.com/watch?v=yJDuHduoRE4) 

* Uses the [web animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

### new Sprinkhaan(options)

```
import Sprinkhaan from 'studio-fonkel/Sprinkhaan';
let sprinkhaan = new Sprinkhaan();
sprinkhaan.show();
```

You can override the following options:

```
{
    // The prefix for all the elements inside the main element.
    prefix: '.sprinkhaan-',
    
    // The easing on all the animations.
    easing: 'cubic-bezier(.61,.14,.5,.93)',
    
    // The selector of the element.
    selector: '#sprinkhaan',
    
    // The length of the animation.
    speed: 300,
    
    // The percentage used to determine if the popup needs 
    // to collapse/expand if only dragging a little bit. 
    threshold: 30
}
```

Expected markup:
```
<!-- data-state="collapsed" is optional, it prevents a flash of content before initiating -->
<div class="sprinkhaan-container" data-state="collapsed" id="sprinkhaan">
    <div class="sprinkhaan-header is-sticky">Lorem ipsum dolor.</div>
    <div class="sprinkhaan-close-button"></div>

    <div class="sprinkhaan-inner">
    
        <!-- Either an image -->
        <div class="sprinkhaan-media"><img src="/images/sprinkhaan.jpg" alt="Sprinkhaan"></div>   
                 
        <!-- Or a data-youtube attribute -->
        <div class="sprinkhaan-media" data-youtube="ayjN3Kdc7OA"></div>

        <div class="sprinkhaan-content-wrapper">
            <div class="sprinkhaan-header is-not-sticky">Lorem ipsum dolor.</div>

            <div class="sprinkhaan-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
</div>

```

### .show(optionalCallback)

This puts the Sprinkhaan into the view, you only see the header.

```
sprinkhaan.show(() => {
    console.log('Logged when the animation is finished')
})
```

### .hide(optionalCallback)

This hides the Sprinkhaan out of the view.

```
sprinkhaan.hide(() => {
    console.log('Logged when the animation is finished')
})
```
### .expand(optionalCallback)

This expands the Sprinkhaan. You will see the content.

```
sprinkhaan.expand(() => {
    console.log('Logged when the animation is finished')
})
```

### .collapse(optionalCallback)

This scrolls to the top of the content and after that it will collapse the Sprinkhaan. You will only see the header.

```
sprinkhaan.collapse(() => {
    console.log('Logged when the animation is finished')
})
```

### .destroy(optionalCallback)

Detaches all the eventListeners. After calling this method you can remove the markup.

```
sprinkhaan.destroy(() => {
    $('#sprinkhaan').remove();
})
```

### .on() & .once()

Sprinkhaan emits events.

* expanded
* hidden
* collapsed
* destroyed

You can subscribe to it like this:

```
sprinkhaan.on('expanded', () => {
    // Called everytime the sprinkhaan is expanded.
})

sprinkhaan.on('hidden', () => {
    // Called everytime the sprinkhaan is hidden.
})

sprinkhaan.on('collapsed', () => {
    // Called everytime the sprinkhaan is collapsed.
})

sprinkhaan.on('destroyed', () => {
    // Called once the sprinkhaan is destroyed.
})
```

The difference between on() & once() is that the once method is only used once. After calling it, it will detach itself.

### Youtube support

If you use the following markup for the media element, a youtube video is rendered.

```
<div class="sprinkhaan-media" data-youtube="ayjN3Kdc7OA"></div>
```

On iOs a thumbnail is placed, on all other system you can play the video inside the Sprinkhaan. If you click on the thumbnail, the youtube app is opened.

### HTML5 video tag support

This is something that we want to support.

### Installation

* jspm install github:studio-fonkel/sprinkhaan
* Copy the sass files from app/scss/ and include them in your project
* Import the es6 file Sprinkhaan.js

### Tests

There are no tests at this moment. We would like to test via browserstack so we can guarantee that iOs is still working.