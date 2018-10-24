define('ember-paper/components/paper-autocomplete-highlight', ['exports', 'ember-paper/templates/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperAutocompleteHighlight.default,
    tagName: 'span',
    flags: '',

    highlight: Ember.computed('searchText', 'label', 'flags', function () {
      let text = `${this.get('label')}`;
      let flags = this.get('flags');
      let regex = this.getRegExp(this.get('searchText'), flags);

      let html = text.replace(regex, '<span class="highlight">$&</span>');
      return Ember.String.htmlSafe(html);
    }),

    sanitize(term) {
      if (!term) {
        return term;
      }
      return term.replace(/[\\^$*+?.()|{}[\]]/g, '\\$&');
    },

    getRegExp(text, flags) {
      let str = '';
      if (flags.indexOf('^') >= 1) {
        str += '^';
      }
      str += text;
      if (flags.indexOf('$') >= 1) {
        str += '$';
      }
      return new RegExp(this.sanitize(str), flags.replace(/[$^]/g, ''));
    }

  });
});