# Sprinkhaan

An ES6 library to create a mobile-popover (commonly used on maps). Sprinkhaan is the Dutch word for Mantis.

**Example:**

[![Sprinkhaan Example](https://raw.githubusercontent.com/studio-fonkel/sprinkhaan/master/sprinkhaan.gif)](https://www.youtube.com/watch?v=yJDuHduoRE4) 

* Uses the [web animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

## Usage

### new Sprinkhaan(options)

```
// Import the library:
import Sprinkhaan from './lib/sprinkhaan/Sprinkhaan.js';

// Create a new instance
let sprinkhaan = new Sprinkhaan();

// and show it:
sprinkhaan.show();
```

*Additionally, you can override some options while creating a new instance:*

```
let sprinkhaan = new Sprinkhaan({
    // Prefix for all elements inside the main element:
    prefix: '.sprinkhaan-',
    
    // The easing on all animations:
    easing: 'cubic-bezier(.61,.14,.5,.93)',
    
    // The selector of the main element:
    selector: '#sprinkhaan',
    
    // Animation length:
    speed: 300,
    
    // Treshold that determines when Sprinkhaan expands or collapses
    // while dragging for a smaller/larger distance than the given value (as percentage of the screen-height):
    threshold: 30
});
```

### Markup:
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

This puts the Sprinkhaan into the view and only shows the header.

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

This expands the Sprinkhaan and shows it's contents.

```
sprinkhaan.expand(() => {
    console.log('Logged when the animation is finished')
})
```

### .collapse(optionalCallback)

This scrolls to the top of the content and collapses the Sprinkhaan afterwards. You will only see the header.

```
sprinkhaan.collapse(() => {
    console.log('Logged when the animation is finished')
})
```

### .destroy(optionalCallback)

Detaches all eventListeners. After calling this method you can safely remove the markup.

```
sprinkhaan.destroy(() => {
    $('#sprinkhaan').remove();
})
```

### .on() & .once()

Sprinkhaan emits the following events:

* expanded
* hidden
* collapsed
* animationsCreated
* destroyed

You can subscribe to them:

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

sprinkhaan.on('animationsCreated', (animations) => {
    // Called once the sprinkhaan created animations.
    // You can use this to add animations to the sprinkhaan.
    // You can choose between animations.teaser which is the initial show of the title and
    // animations.popup which is the expanding animation.
    
    // Here we add left padding to the header when it is expanding.
    animations.popup.addKeyframeEffect(sprinkhaan.elements['header.is-not-sticky'], [
        { paddingLeft: '30px' },
        { paddingLeft: '90px' }
    ]);
})

sprinkhaan.on('destroyed', () => {
    // Called once the sprinkhaan is destroyed.
})
```

The difference between `on()` and `once()` is that the once-method is only used once. After calling it, it will detach itself.

### Youtube support

If you use the following markup for the media element, a youtube video is rendered:

```
<div class="sprinkhaan-media" data-youtube="ayjN3Kdc7OA"></div>
```

On iOS a thumbnail of the video is placed. On all other devices you can play the video inside the Sprinkhaan. When clicking on the thumbnail, the Youtube-app will open and play the corresponding video.

### HTML5 video tag support

This is something we want to support in the future.

## Installation

* Download this repo and put the src folder somewhere in your codebase.
* Copy the sass files from `app/scss/` and include them in your project
* Import the es6 file `Sprinkhaan.js`

### Tests

There are no tests at this moment. We'd like to test via browserstack so we can guarantee that iOS is still working.
