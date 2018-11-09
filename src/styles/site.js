import * as $ from 'jquery'
window.jQuery = window.$ = $

$(document).ready(function() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop){
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
        sticky.addClass("shrink");
      }
      else{
        sticky.removeClass("is-sticky");
        sticky.removeClass("shrink");
        stickyWrapper.height('auto');
      }
    };
    
    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
      
      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      
      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
    });
  });