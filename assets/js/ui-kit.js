(function (document) {

  var CollapsibleNav = {

    /**
     * Initialise the Global Nav collapse behaviour
     * @param {array} elems - list of collapsible elements
     */
    init: function(elems) {
      for (var i = 0; i < elems.length; i++) {
        if (elems[i] !== null) {
          this.initPanel(elems[i]);
          this.initToggle(elems[i]);
        }
      }
    },

    /**
     * Initialise the collapsible panel by setting its ID & 'aria-expanded' attributes
     * @param {object} elem - the containing DOMElement
     */
    initPanel: function(elem) {
      var panelLabel = elem.dataset.label || elem.className;

      elem.id = panelLabel;
      elem.setAttribute('aria-expanded', 'false');
    },

    /**
     * Create a toggle element, attach an event listener and insert it into the DOM
     * @param {object} elem - containing element for collapsible nav
     */
    initToggle: function(elem) {
      var panelLabel = elem.getAttribute('aria-label') || elem.className,
          toggle = document.createElement('button'),
          self = this;

      toggle.setAttribute('aria-controls', panelLabel);
      toggle.className = panelLabel + '-toggle';
      toggle.textContent = elem.dataset.toggleLabel || 'Menu';
      toggle.targetElem = elem;
      toggle.addEventListener('click', self.togglePanel);

      elem.parentNode.insertBefore(toggle, elem);
    },

    /**
     * Toggles ARIA attribute on the nav element
     * @param {event} event - the event that triggered the toggle
     */
    togglePanel: function(event) {
      var toggle = event.target,
          elem = event.target.targetElem,
          expanded = elem.getAttribute('aria-expanded') === 'true';

      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      elem.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    }

  };

  // Kick of the JavaScript party when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    CollapsibleNav.init([
      document.getElementsByClassName('global-nav').item(0),
      document.getElementsByClassName('local-nav').item(0)
    ]);
  });

})(document);
