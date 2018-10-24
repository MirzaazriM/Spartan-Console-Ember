define('ember-ace/utils/completion-manager', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * Supports Ace's interface for supplying completion information.
   *
   * @private
   * @class CompletionManager
   */
  class CompletionManager {
    constructor({ suggestCompletions, renderCompletionTooltip }) {
      this._suggestCompletions = suggestCompletions;
      this._renderCompletionTooltip = renderCompletionTooltip;
    }

    // Called by Ace when
    getCompletions(editor, session, position, prefix, callback) {
      const suggestCompletions = this._suggestCompletions;
      if (!suggestCompletions) return callback(null, []);

      let promise;
      try {
        promise = Ember.run(() => suggestCompletions(editor, session, position, prefix));
      } catch (error) {
        promise = Ember.RSVP.reject(error);
      }

      Ember.RSVP.resolve(promise).then(results => callback(null, results)).catch(error => callback(error));
    }

    getDocTooltip(result) {
      result.docHTML = this._renderCompletionTooltip.call(null, result);
    }
  }
  exports.default = CompletionManager;
});