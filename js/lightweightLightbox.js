/*
 * LightweightLightbox.js v1.0.0
 * https://uk.linkedin.com/in/danrthorpe/
 *
 * Copyright 2016, Dan Thorpe
 * This content is released under the MIT license
 * http://en.wikipedia.org/wiki/MIT_License
 */

(function($){

    $.fn.lightweightLightbox = function(options) {

        var settings = $.extend({

            useArrows: true,

        }, options);

        var elementIndexCount = ($(".lightbox-container .box").length - 1);

        function newLightbox(){

            var image = $(".box.active img").attr("src");
            var title = $(".box.active img").attr("alt");

            if($("#lightbox").length){
                refreshLightbox(image, title);
            }
            else {
                $("body").append('<div class="lightbox" id="lightbox"><span class="close fa fa-times"></span><span class="left fa fa-chevron-left"></span><span class="right fa fa-chevron-right"></span><div class="content"><div class="inner"><div class="image"><img src="' + image + '" /></div><div class="title">' + title + '</div></div></div></div>');
            }

            populateArrows();
            disableBodyScroll();
        }

        function disableBodyScroll(){

            $("body").css({
                'overflow': 'hidden',
                'height': '100%'
            });
        }

        function enableBodyScroll(){

            $("body").css({
                'overflow': 'auto',
                'height': 'auto'
            });
        }

        function populateArrows(){

            if(!settings.useArrows){

                $(".lightbox .left").hide();
                $(".lightbox .right").hide();

                return;
            }

            var index = $($(".box.active")).index('.box');

            if(index > 0){
                $(".lightbox .left").show();
            } else {
                $(".lightbox .left").hide();
            }

            if(index >= elementIndexCount){
                $(".lightbox .right").hide();
            } else {
                $(".lightbox .right").show();
            }
        }

        function refreshLightbox(image, title){

            $("#lightbox .image img").attr("src", image);
            $("#lightbox .title").html(title);
        }

        function nextImage(){

            var next = $($(".box.active").nextAll(".box")).index('.box');

            if(next == -1 || next >= elementIndexCount)
                next = elementIndexCount;

            $(".box").removeClass("active").eq(next).addClass("active");

            newLightbox();
        }

        function previousImage(){

            var previous = $($(".box.active").prevAll(".box")).index('.box');

            if(previous < 0)
                previous = 0;

            $(".box").removeClass("active").eq(previous).addClass("active");

            newLightbox();
        }

        function closeLightbox(){

            $(".box").removeClass("active");
            $(".lightbox").remove();
            enableBodyScroll();
        }

        $(document).on("click", ".lightbox-image", function(){

            $(".box").removeClass("active");
            $(this).closest(".box").addClass("active");

            newLightbox();
        });

        $(document).keydown(function(e) {

            if($(".box.active").length){

                //left
                if(e.which == 37){
                    previousImage();
                }
                //right
                if(e.which == 39){
                    nextImage();
                }
            }
        });

        $(document).on("click", ".lightbox .left", function(){
            previousImage();
        });

        $(document).on("click", ".lightbox .right", function(){
            nextImage();
        });

        $(document).on("click", ".lightbox .close", function(){
            closeLightbox();
        });
    }

}(jQuery));