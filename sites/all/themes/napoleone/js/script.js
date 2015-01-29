/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function(context, settings) {

      // Place your code here
    }
  };

  Drupal.behaviors.projectOnepageScroll = {

    attach: function(context,settings) {
      $('.l-main').onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        pagination: false
      });
    }
  };

  Drupal.behaviors.projectMoreButton = {
    attach: function(context,settings) {
      $('.p-next').on('click', function () {
        $('.l-main').moveDown();
      });
    }
  };


  Drupal.behaviors.projectDTInView = {
    attach: function(context,settings) {

      $('.p-dt-description').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if(isInView) {
          $('.l-header').addClass('p-dt__header');
        } else {
          $('.l-header').removeClass('p-dt__header');
        }
      });
    }
  };

  Drupal.behaviors.projectRTTInView = {
    attach: function(context,settings){
      $('.p-rtt-description').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if(isInView) {

          //if(visiblePartY=='bottom'){

            $('.l-header').addClass('p-rtt__header');
          //}
        }else {
          $('.l-header').removeClass('p-rtt__header');
        }
      });
    }
  };

  Drupal.behaviors.projectTTInView = {
    attach: function(context,settings){
      $('.p-tt-description').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if(isInView) {

          //if(visiblePartY=='bottom'){

            $('.l-header').addClass('p-tt__header');
          //}
        }else {
          $('.l-header').removeClass('p-tt__header');
        }
      });
    }
  };

  Drupal.behaviors.projectTWIGInView = {
    attach: function(context,settings){
      $('.p-twig-description').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if(isInView) {

          //if(visiblePartY=='bottom'){

            $('.l-header').addClass('p-twig__header');
          //}
        }else {
          $('.l-header').removeClass('p-twig__header');
        }
      });
    }
  };

  Drupal.behaviors.projectRTEInView = {
    attach: function(context,settings){
      $('.p-rte-description').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if(isInView) {

          //if(visiblePartY=='bottom'){

            $('.l-header').addClass('p-rte__header');
          //}
        }else {
          $('.l-header').removeClass('p-rte__header');
        }
      });
    }
  };
})(jQuery, Drupal, this, this.document);
