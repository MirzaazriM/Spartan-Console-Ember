define('ember-power-select/test-support/helpers', ['exports', '@ember/test-helpers', 'ember-power-select/test-support/index'], function (exports, _testHelpers, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
  exports.selectSearch = selectSearch;
  exports.removeMultipleOption = removeMultipleOption;
  exports.clearSelected = clearSelected;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('selectChoose', function (_, cssPathOrTrigger, valueOrSelector, optionIndex) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `selectChoose` is deprecated. Please, import it explicitly with `import { selectChoose } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-select-choose', until: '2.0.0' }));

      return (0, _index.selectChoose)(cssPathOrTrigger, valueOrSelector, optionIndex);
    });

    Ember.Test.registerAsyncHelper('selectSearch', async function (app, cssPathOrTrigger, value) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `selectSearch` is deprecated. Please, import it explicitly with `import { selectSearch } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-select-search', until: '2.0.0' }));

      return (0, _index.selectSearch)(cssPathOrTrigger, value);
    });

    Ember.Test.registerAsyncHelper('removeMultipleOption', async function (app, cssPath, value) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `removeMultipleOption` is deprecated. Please, import it explicitly with `import { removeMultipleOption } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-remove-multiple-option', until: '2.0.0' }));

      return (0, _index.removeMultipleOption)(cssPath, value);
    });

    Ember.Test.registerAsyncHelper('clearSelected', async function (app, cssPath) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `clearSelected` is deprecated. Please, import it explicitly with `import { clearSelected } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-clear-selected', until: '2.0.0' }));

      return (0, _index.clearSelected)(cssPath);
    });
  };

  /**
   * @private
   * @param {String} selector CSS3 selector of the elements to check the content
   * @param {String} text Substring that the selected element must contain
   * @returns HTMLElement The first element that maches the given selector and contains the
   *                      given text
   */
  function findContains(selector, text) {
    return [].slice.apply(document.querySelectorAll(selector)).filter(e => {
      return e.textContent.trim().indexOf(text) > -1;
    })[0];
  }

  async function nativeMouseDown(selectorOrDomElement, options) {
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'mousedown', options);
  }

  async function nativeMouseUp(selectorOrDomElement, options) {
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'mouseup', options);
  }

  async function triggerKeydown(domElement, k) {
    return (0, _testHelpers.triggerKeyEvent)(domElement, 'keydown', k);
  }

  function typeInSearch(scopeOrText, text) {
    let scope = '';

    if (typeof text === 'undefined') {
      text = scopeOrText;
    } else {
      scope = scopeOrText;
    }

    let selectors = ['.ember-power-select-search-input', '.ember-power-select-search input', '.ember-power-select-trigger-multiple-input', 'input[type="search"]'].map(selector => `${scope} ${selector}`).join(', ');

    return (0, _testHelpers.fillIn)(selectors, text);
  }

  async function clickTrigger(scope, options = {}) {
    let selector = '.ember-power-select-trigger';
    if (scope) {
      selector = `${scope} ${selector}`;
    }
    return (0, _testHelpers.click)(selector, options);
  }

  async function nativeTouch(selectorOrDomElement) {
    (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'touchstart');
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'touchend');
  }

  async function touchTrigger() {
    return nativeTouch('.ember-power-select-trigger');
  }

  async function selectChoose(cssPathOrTrigger, valueOrSelector, optionIndex) {
    return (0, _index.selectChoose)(cssPathOrTrigger, valueOrSelector, optionIndex);
  }

  async function selectSearch(cssPathOrTrigger, value) {
    return (0, _index.selectSearch)(cssPathOrTrigger, value);
  }

  async function removeMultipleOption(cssPath, value) {
    return (0, _index.removeMultipleOption)(cssPath, value);
  }

  async function clearSelected(cssPath) {
    return (0, _index.clearSelected)(cssPath);
  }

  // Helpers for acceptance tests
});