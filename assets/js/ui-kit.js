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

  // Kick of the JavaScript party when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initComponent('Accordion', '.accordion, details');
    initComponent('LocalNav', ['.global-nav', '.local-nav', '.local-nav-demo']);
    initComponent('SiteNav', '.site-nav__wrapper');
  });

})(document);
