define('ember-paper/components/paper-ink-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'md-ink-bar',

    attributeBindings: ['style'],
    classNameBindings: ['movingRight:md-right:md-left'],

    style: Ember.computed('left', 'right', function () {
      return Ember.String.htmlSafe(`left: ${this.get('left')}px; right: ${this.get('right')}px;`);
    })
  });
});