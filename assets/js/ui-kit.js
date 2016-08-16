var smoothScroll = require('smoothscroll');

(function (document) {

  var Collapsible = {

    /**
     * Initialise the Collapse behaviour
     * @param {array} elems - array of HTMLCollections representing collapsible elements
     * @param {object} toggle - the element to be used as a toggle. If `null`, one is created
     * @param {bool} collapsed - if `true`, panel is collapsed by default
     */
    init: function(elems, toggle, collapsed) {
      for (var i = 0; i < elems.length; i++) {
        var toggleElem = toggle ? toggle.item(i) : null;
        this.initPanel(elems[i], collapsed);
        this.initToggle(elems[i], toggleElem);
      }
    },

    /**
     * Initialise the collapsible panel by setting its ID & 'aria-expanded' attributes
     * @param {object} elem - the containing DOMElement
     * @param {bool} collapsed - if `true`, panel is collapsed by default
     */
    initPanel: function(elem, collapsed) {
      var panelLabel = elem.getAttribute('data-label');

      elem.id = panelLabel;

      if (collapsed) {
        elem.setAttribute('aria-expanded', 'false');
      }
    },

    /**
     * Create a toggle element, attach an event listener and insert it into the DOM
     * @param {object} elem - containing element for collapsible nav
     */
    initToggle: function(elem, toggle) {
      var panelLabel = elem.getAttribute('data-label') ? elem.getAttribute('data-label') : elem.className,
          toggleElem = toggle || document.createElement('button'),
          self = this;

      if (!toggle) {
          toggleElem.textContent = elem.getAttribute('data-toggle-label') || 'Menu';
      }

      toggleElem.setAttribute('aria-controls', panelLabel);
      toggleElem.className = panelLabel + '-toggle';
      toggleElem.targetElem = elem;
      toggleElem.addEventListener('click', self.togglePanel);

      if (!toggle) {
        elem.parentNode.insertBefore(toggleElem, elem);
      }

    },

    /**
     * Toggles ARIA attribute on the nav element
     * @param {event} event - the event that triggered the toggle
     */
    togglePanel: function(event) {
      var toggle = event.target,
          elem = event.target.targetElem,
          expanded = elem.getAttribute('aria-expanded') === 'true';

      event.preventDefault();

      if (elem.hasAttribute('open')) {
        elem.removeAttribute('open');
      } else {
        elem.setAttribute('open', '');
      }

      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      elem.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    }

  };

  // Kick of the JavaScript party when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    var navElements = document.querySelectorAll('.global-nav, .local-nav');
    Collapsible.init(navElements, null, true);

    var accordionElements = document.querySelectorAll('.accordion, details'),
        accordionToggleElement = document.querySelectorAll('.accordion-button, summary');
    Collapsible.init(accordionElements, accordionToggleElement, false);
  });

})(document);


// This code is legacy as of v1.2
// Marked for removal in v2.0
$(document).ready(function () {
    $('.js-accordion-trigger').bind('touchstart click', function (e) {

        jQuery(this).parent().find('ul').slideToggle('fast');
        jQuery(this).find(".chevron").toggleClass('top bottom');
        // apply the toggle to the ul
        jQuery(this).parent().toggleClass('is-expanded');

        // https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions
        if (jQuery(this).attr('aria-expanded') == 'false') { // region is collapsed
            // update the aria-expanded attribute of the region
            jQuery(this).attr('aria-expanded', 'true');
            // move focus to the region
            jQuery(this).find('ul').focus();
            jQuery(this).find('span').text("Show menu");
        }
        else { // region is expanded
            // update the aria-expanded attribute of the region
            jQuery(this).attr('aria-expanded', 'false');
            jQuery(this).find('span').text("Hide menu");
        }

        e.preventDefault();
    });
});
