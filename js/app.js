// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


(function($) {
  $(document).ready(function() {

    $('.stat strong').appear(function() {
      $(this).countTo(100);
    });

    $(".bars").each(function() {
      $('> li > .highlighted', $(this)).each(function() {
        $(this).appear(function() {
          var percent = $(this).attr("data-percent");
          // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
          // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
          $(this).animate({
            'width': percent + '%'
          }, 1700, function() { $(this).css('overflow', 'visible'); });
        });
      });
    });

    $(".staffbox").each(function() {

      var staffbox = $(this);

      $(this).find('.staff').each(function() {
        $(this).click(function() {
          $(staffbox).find('.staff').removeClass('active');
          $(this).addClass('active');
          var target = $(this).attr('data-target');
          // console.log($(staff).find('.staff-intro'));
          $(staffbox).find('.staff-intro').removeClass('active');
          $(target).addClass('active');
        });
      });

    });

    $('.fadeinleft, .fadeinright').appear(function() {
      $(this).addClass('appear');
    });

    $('ul#filter li a').click(function() {
      $('ul#filter li').removeClass('current');
      $(this).closest('li').addClass('current');

      var cat = $(this).attr('data-cat');

      var gallery = $('ul#filter').closest('.gallery-wrapper').find('ul.gallery');

      if (cat === 'all') {
        $('li', gallery).removeClass('hidden');
      } else {
        $('li', gallery).each(function() {
          if ($(this).hasClass(cat)) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      }

      return false;
    });


  });
})(jQuery);
