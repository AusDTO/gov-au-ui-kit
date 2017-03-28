'use strict';

var SmoothScroll = require('smoothscroll');

var components = {
  'Accordion': require('./components/accordion'),
  'LocalNav': require('./components/local-nav'),
  'SiteNav': require('./components/site-nav')
};

(function (document) {

  function initComponent(component, selector) {
    if (document.querySelector(selector)) {
      components[component].init(selector);
    }
  }

  checkMedia = function(){
    //Returns which media-query is active
    //(Content is added to the body via CSS media queries)
    var size = window.getComputedStyle( document.body, ':after' ).getPropertyValue( 'content' ).replace( /"/g, '' );

    if( size == 'desktop' ) { return 'desktop'; }
    else if ( size == 'tablet' ) { return 'tablet'; }
    else { return 'mobile'; }
  }

  // Kick of the JavaScript party when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initComponent('Accordion', '.accordion, details');
    initComponent('LocalNav', ['.global-nav', '.local-nav', '.local-nav-demo']);
    initComponent('SiteNav', '.site-nav__wrapper');
  });

})(document);
