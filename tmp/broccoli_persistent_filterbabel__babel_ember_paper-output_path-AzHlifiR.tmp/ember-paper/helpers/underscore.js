define('ember-paper/helpers/underscore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.underscore = underscore;
  /**
   * @module ember-paper
   */
  function underscore([text]) {
    return Ember.String.underscore(text);
  }

  exports.default = Ember.Helper.helper(underscore);
});