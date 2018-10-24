define('ember-paper/components/paper-divider', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'md-divider',
    attributeBindings: ['insetAttr:md-inset'],
    inset: false,
    classNames: ['paper-divider', 'md-default-theme'],

    /*
     * Not binding boolean values in Ember 1.8.1?
     * https://github.com/emberjs/ember.js/issues/9595
     */
    insetAttr: Ember.computed('inset', function () {
      return this.get('inset') ? 'md-inset' : null;
    })
  });
});