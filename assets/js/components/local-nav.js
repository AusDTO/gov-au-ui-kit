'use strict';

var ResponsiveNav = require('responsive-nav');

module.exports = {

  init: function(selectors) {
    selectors.forEach(function(selector) {
      if (document.querySelector(selector)) {
        ResponsiveNav(selector);
      }
    });
  }
  
};
