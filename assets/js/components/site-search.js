'use strict';

require('classlist-polyfill');

function init(siteSearchInputSelector) {
  var siteSearchInput = document.querySelectorAll(siteSearchInputSelector).item(0);
  var formChangeEvents = 'propertychange input';
  _addEventListener(siteSearchInput, formChangeEvents, _onFormChange);
}

function _onFormChange(event) {
  let element = event.target;
  element.classList.toggle();
}

function _addEventListener(elem, triggers, callback) {
  if (typeof window.addEventListener === undefined) {
    elem.addEventListener(triggers, callback);
  } else {
    elem.attachEvent(triggers, callback);
  }
}

module.exports = {
  init: init
};
