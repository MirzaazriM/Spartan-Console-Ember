define('ember-paper/utils/browser-features', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // Taken from https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
  const supportsPassiveEventListeners = exports.supportsPassiveEventListeners = function () {
    let supportsPassiveOption = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
      // eslint-disable-next-line
    } catch (e) {};
    return supportsPassiveOption;
  }();
});