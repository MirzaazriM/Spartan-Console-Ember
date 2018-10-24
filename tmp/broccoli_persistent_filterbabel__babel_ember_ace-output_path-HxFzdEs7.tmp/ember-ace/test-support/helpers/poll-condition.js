define('ember-ace/test-support/helpers/poll-condition', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = async function pollCondition(message, callback, {
    maxTries = 50,
    interval = 5
  } = {}) {

    for (let tries = 0; tries < maxTries; tries++) {
      try {
        const result = callback();
        if (result) {
          return result;
        }
      } catch (e) {
        // If the callback explodes, consider that a failure of the condition
      }

      await new Ember.RSVP.Promise(resolve => setTimeout(resolve, interval));
    }

    throw new Error(`Condition failed to come true: ${message}`);
  };
});