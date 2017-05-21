# Sprinkhaan

An ES6 library to create a popover for use with maps on mobile devices. Sprinkhaan is the dutch word for Mantis.

Example:

[![Sprinkhaan Example](https://img.youtube.com/vi/yJDuHduoRE4/0.jpg)](https://www.youtube.com/watch?v=yJDuHduoRE4) 

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