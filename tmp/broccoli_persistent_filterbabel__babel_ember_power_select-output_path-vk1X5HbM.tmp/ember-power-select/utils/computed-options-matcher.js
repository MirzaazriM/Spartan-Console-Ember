define('ember-power-select/utils/computed-options-matcher', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = computedOptionsMatcher;
  function computedOptionsMatcher(matcherField, defaultMatcher) {
    return Ember.computed('searchField', matcherField, function () {
      let { [matcherField]: matcher, searchField } = this.getProperties(matcherField, 'searchField');
      if (searchField && matcher === defaultMatcher) {
        return (option, text) => matcher(Ember.get(option, searchField), text);
      } else {
        return (option, text) => {
          (true && !(matcher !== defaultMatcher || typeof option === 'string') && Ember.assert('{{power-select}} If you want the default filtering to work on options that are not plain strings, you need to provide `searchField`', matcher !== defaultMatcher || typeof option === 'string'));

          return matcher(option, text);
        };
      }
    });
  }
});