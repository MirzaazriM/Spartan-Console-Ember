define('ember-basic-dropdown/test-support/helpers', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeTap = nativeTap;
  exports.clickTrigger = clickTrigger;
  exports.tapTrigger = tapTrigger;
  exports.fireKeydown = fireKeydown;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('clickDropdown', function (app, cssPath, options = {}) {
      (true && !(false) && Ember.deprecate('Using the global `clickDropdown` acceptance helper from ember-basic-dropdown is deprecated. Please, explicitly import the `clickTrigger` or just use `click` helper from `@ember/test-helpers`.', false, { until: '1.0.0', id: 'ember-basic-dropdown-click-dropdown' }));

      clickTrigger(cssPath, options);
    });

    Ember.Test.registerAsyncHelper('tapDropdown', function (app, cssPath, options = {}) {
      (true && !(false) && Ember.deprecate('Using the global `tapDropdown` acceptance helper from ember-basic-dropdown is deprecated. Please, explicitly import the `tapTrigger` or just use `tap` helper from `@ember/test-helpers`.', false, { until: '1.0.0', id: 'ember-basic-dropdown-click-dropdown' }));

      tapTrigger(cssPath, options);
    });
  };

  function nativeTap(selector, options = {}) {
    let touchStartEvent = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(key => touchStartEvent[key] = options[key]);
    Ember.run(() => document.querySelector(selector).dispatchEvent(touchStartEvent));
    let touchEndEvent = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(key => touchEndEvent[key] = options[key]);
    Ember.run(() => document.querySelector(selector).dispatchEvent(touchEndEvent));
  }

  function clickTrigger(scope, options = {}) {
    let selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      let element = document.querySelector(scope);
      if (element.classList.contains('ember-basic-dropdown-trigger')) {
        selector = scope;
      } else {
        selector = scope + ' ' + selector;
      }
    }
    (0, _testHelpers.click)(selector, options);
    return (0, _testHelpers.settled)();
  }

  function tapTrigger(scope, options = {}) {
    let selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    nativeTap(selector, options);
  }

  function fireKeydown(selector, k) {
    let oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    Ember.merge(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    Ember.run(() => document.querySelector(selector).dispatchEvent(oEvent));
  }

  // acceptance helpers
});