'use strict';

{
  $(function() {
    var menu = $('.global-nav'),
    offset = menu.offset();

    var menuclear = $('.clear'),
    offsetclear = menuclear.offset();

    $(window).on('load scroll', function () {
      if($(window).scrollTop() > offset.top) {
        menu.addClass('fixed');
      } else if ($(window).scrollTop() > offsetclear.top) {
        menu.removeClass('fixed');
      } else {
        menu.removeClass('fixed');
      }
    });
  });
}