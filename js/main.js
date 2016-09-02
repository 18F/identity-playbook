$(function() {
  $('#pb-nav--side').affix({
    offset: {
      top: $('#pb-nav--side').offset().top
    }
  });

  $('#pb-nav--side a').smoothScroll({
    afterScroll: function(options) {
      var $tgt = $(options.scrollTarget);
      $tgt.attr('tabIndex', '0');
      // Using $tgt[0] allows us to call .focus() on the DOM node itself, not the jQuery collection
      $tgt[0].focus();
    }
  });
});
