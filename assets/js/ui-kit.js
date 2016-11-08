'use strict';

(function (document) {

  var smoothScroll = require('smoothscroll');
  var responsiveNav = require('responsive-nav');
  var Velocity = require('velocity-animate');
  var SiteSearch = require('./components/site-search.js');

   function initResponsiveNav(elementSelector) {
    if (document.querySelector(elementSelector)) {
      responsiveNav(elementSelector);
    }
  }

   function initAccordions(elems) {
    for (var i = 0; i < elems.length; i++) {
      var toggle = elems[i].querySelector('.accordion-button, summary');
      var panel = elems[i].querySelector('.accordion-panel');
      var panelLabel;

      if (elems[i].getAttribute('data-label')) {
        panelLabel = elems[i].getAttribute('data-label');
      } else {
        panelLabel = elems[i].className;
      }

      initToggle(elems[i], toggle, panel, panelLabel);
      initPanel(elems[i], panel, panelLabel);

    }
  }

   function initToggle(elem, toggle, panel, label) {
    toggle.targetElem = elem;
    toggle.targetPanel = panel;
    toggle.setAttribute('aria-controls', label);
    toggle.addEventListener('click', togglePanel);
  }

   function initPanel(elem, panel, label) {
    elem.id = label;

    if (elem.getAttribute('aria-expanded') === 'false') {
      slidePanel(panel, true);
    }
  }

   function togglePanel(event) {
    var toggle = event.target,
        elem = event.target.targetElem,
        panel = event.target.targetPanel,
        expanded = elem.getAttribute('aria-expanded') === 'true';

    event.preventDefault();

    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    elem.setAttribute('aria-expanded', expanded ? 'false' : 'true');

    slidePanel(panel, expanded);
  }

   function slidePanel(panel, bool) {
    Velocity(panel, bool ? 'slideUp' : 'slideDown', { duration: 300 });
  }

  // Kick of the JavaScript party when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {

    initResponsiveNav('.global-nav');
    initResponsiveNav('.local-nav');
    initResponsiveNav('.local-nav-demo');

    initAccordions(document.querySelectorAll('.accordion, details'));

    SiteSearch.init('.js-search-input');
  });

})(document);
