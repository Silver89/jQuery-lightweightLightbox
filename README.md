# jquery-lightweightLightbox

### What does this plugin do?

The purpose of this plugin is to provide a simple, lightweight and responsive lightbox with no bloat and only the most basic functionality.

### Requires

* jQuery
* HTML web page with CSS
* FontAwesome

### Installation

1. Download the lightweightLightbox jQuery plugin and css files, you can choose the lightweightLightbox.js version or the lightweightLightbox.min.js for faster load times
2. Include both jQuery and the plugin file in your HTML, ideally before the </body> tag, the plugin must be after jQuery.
3. Include the css file in your header
4. Initiate the plugin using: $(".lightbox-container").lightweightLightbox();
5. Follow markup instructions
6. Add FontAwesome for the chevron and close icons: https://fortawesome.github.io/Font-Awesome/get-started/

### Demo

You can view a live demo at the following location: <a href="http://github.drttrd.com/jquery-lightweightLightbox/demo.html" target="_blank">Demo Link</a>

### Usage

The following is a basic example of how to use the plugin.

``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/lightweightLightbox.css">
        <title>LightweightLightbox jQuery plugin demo</title>
    </head>
    <body>

    <div class="lightbox-container">
        <div class="box">
            <img alt="An example image 1" class="lightbox-image" src="images/example-1.jpg" />
        </div>
        <div class="box">
            <img alt="An example image 2" class="lightbox-image" src="images/example-2.jpg" />
        </div>
        <div class="box">
            <img alt="An example image 3" class="lightbox-image" src="images/example-3.jpg" />
        </div>
        <div class="box">
            <img alt="An example image 4" class="lightbox-image" src="images/example-4.jpg" />
        </div>
        <div class="box">
            <img alt="An example image 5" class="lightbox-image" src="images/example-5.jpg" />
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="js/lightweightLightbox.min.js"></script>

    <script type="text/javascript">
        $(".lightbox-container").lightweightLightbox();
    </script>

    </body>
    </html>
```

There is now additional support to dynamically extend the lightbox if new elements are loaded in post page build. You can now run the following after you've loaded content and this will refresh the count.
``` javascript
<script type="text/javascript">
var lightweightLightbox = $(".lightbox-container").lightweightLightbox();

//After loading of new content run
lightweightLightbox.refreshElementCount();
</script>
```


### Support

Tested and working in the following:

1. Chrome 47
2. Firefox 42
3. Microsoft Edge 25
