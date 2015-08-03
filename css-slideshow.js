/** Usage:
$('.slideshow-container').cssSlideshow();

set speed with:
$('.slideshow-container').cssSlideshow({speed:number});
**/

(function($) {
  $.fn.cssSlideshow = function(options) {
    var defaults = {
      speed: 4,
      easing: 'ease-out',
      transitionSpeed: 1
    }
    var options = $.extend({}, defaults, options);

    var slideshow = $(this);
    var currentImage = 1;
    var firstItem = slideshow.children().first();
    var maxImages = slideshow.children().length;

    // set default css properties on slideshow items
    $.each(slideshow.children(), function(i, v) {
      $(v).css({
        'position': 'absolute',
        'opacity': '0',
        'transition': 'opacity '+options.transitionSpeed+'s '+options.easing,
        '-moz-transition': 'opacity '+options.transitionSpeed+'s '+options.easing
      });
    });
    // set first item as active
    firstItem.addClass('active').css({
      'opacity': '1'
    });

    function rotateImages(slideshowCont) {
      var slideshowItem = slideshow.children().first();
      var rotator = setInterval(function() {

        var nextImage = $('.active').next(slideshowItem);
        if (currentImage == maxImages) {
          currentImage = 1;
          slideshowItem.addClass('active').css({
            'opacity': '1'
          }).siblings().removeClass('active').css({
            'opacity': '0'
          });
        } else {
          nextImage.addClass('active').css({
            'opacity': '1'
          }).siblings().removeClass('active').css({
            'opacity': '0'
          });
          currentImage++;
        }
      }, options.speed * 1000);
    }

    rotateImages($(this));
  }

})(jQuery);
