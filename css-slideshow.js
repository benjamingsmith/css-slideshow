/** Useage:
$('.slideshow-container').cssSlideshow();

set speed with:
$('.slideshow-container').cssSlideshow({speed:number});
**/

(function($) {
  $.fn.cssSlideshow = function(options) {
    var defaults = {
      speed: 4
    }
    var options = $.extend({}, defaults, options);

    var slideshow = $(this);
    var currentImage = 1;
    var firstItem = slideshow.children().first();
    var maxImages = slideshow.children().length;

    function rotateImages(slideshowCont) {
      var slideshowItem = slideshow.children().first();
      firstItem.addClass('active');

      var rotator = setInterval(function() {

        var nextImage = $('.active').next(slideshowItem);
        if (currentImage == maxImages) {
          currentImage = 1;
          slideshowItem.addClass('active').siblings().removeClass('active');
        } else {
          nextImage.addClass('active').siblings().removeClass('active');
          currentImage++;
        }
      }, options.speed * 1000);
    }

    rotateImages($(this));
  }

})(jQuery);
