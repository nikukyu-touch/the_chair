'use strict';

{
  $(function() {
    var menu = $('.global-nav'),
    offset = menu.offset();

    $(window).on('load scroll', function () {
      if($(window).scrollTop() > offset.top) {
        menu.addClass('fixed');
      } else {
        menu.removeClass('fixed');
      }
    });
  });
}