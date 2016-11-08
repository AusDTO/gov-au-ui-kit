'use strict';

var Velocity = require('velocity-animate');

module.exports = {

  init: function(selector) {
    var elems = document.querySelectorAll(selector);
    for (var i = 0; i < elems.length; i++) {
      var toggle = elems[i].querySelector('.accordion-button, summary');
      var panel = elems[i].querySelector('.accordion-panel');
      var panelLabel;

      if (elems[i].getAttribute('data-label')) {
        panelLabel = elems[i].getAttribute('data-label');
      } else {
        panelLabel = elems[i].className;
      }

      this._initToggle(elems[i], toggle, panel, panelLabel);
      this._initPanel(elems[i], panel, panelLabel);

    }
  },

  _initToggle: function(elem, toggle, panel, label) {
    toggle.targetElem = elem;
    toggle.targetPanel = panel;
    toggle.setAttribute('aria-controls', label);
    toggle.addEventListener('click', this._togglePanel.bind(this));
  },

  _initPanel: function(elem, panel, label) {
    elem.id = label;

    if (elem.getAttribute('aria-expanded') === 'false') {
      this._slidePanel(panel, true);
    }
  },

  _togglePanel: function(event) {
    var toggle = event.target,
        elem = event.target.targetElem,
        panel = event.target.targetPanel,
        expanded = elem.getAttribute('aria-expanded') === 'true';

    event.preventDefault();

    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    elem.setAttribute('aria-expanded', expanded ? 'false' : 'true');

    this._slidePanel(panel, expanded);
  },

  _slidePanel: function(panel, bool) {
    Velocity(panel, bool ? 'slideUp' : 'slideDown', { duration: 300 });
  }

};
