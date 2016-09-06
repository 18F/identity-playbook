import $ from 'jquery';

import 'bootstrap/js/affix';
import 'bootstrap/js/scrollspy';

import 'jquery-smooth-scroll';


$(function() {
  $('#pb-nav--side').affix({
    offset: {
      top: $('#pb-nav--side').offset().top
    }
  });

  $('#pb-nav--side a, #pb-principles li a').smoothScroll({
    afterScroll: function(options) {
      var $tgt = $(options.scrollTarget);
      $tgt.attr('tabIndex', '-1');
      // Using $tgt[0] allows us to call .focus() on the
      // DOM node itself, not the jQuery collection
      $tgt[0].focus();
    }
  });
});
