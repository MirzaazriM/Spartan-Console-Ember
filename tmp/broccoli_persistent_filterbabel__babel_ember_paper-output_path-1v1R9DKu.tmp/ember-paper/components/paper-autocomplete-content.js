define('ember-paper/components/paper-autocomplete-content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content', 'ember-paper/templates/components/paper-autocomplete-content'], function (exports, _content, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _content.default.extend({
    layout: _paperAutocompleteContent.default,

    // returns `destinationElement` for ember-basic-dropdown >= 1.0.0
    // finds destination by `to` for ember-basic-dropdown < 1.0.0
    destinationEl: Ember.computed('destinationElement', 'to', function () {
      return this.get('destinationElement') || document.getElementById(this.get('to'));
    })
  });
});