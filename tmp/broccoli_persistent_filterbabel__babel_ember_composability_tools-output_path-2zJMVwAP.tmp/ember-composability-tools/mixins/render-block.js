define('ember-composability-tools/mixins/render-block', ['exports', 'ember-composability-tools/templates/render-block'], function (exports, _renderBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    layout: _renderBlock.default,

    fastboot: Ember.computed(function () {
      let owner = Ember.getOwner(this);
      return owner.lookup('service:fastboot');
    }),
    isFastBoot: Ember.computed('fastboot', function () {
      return this.get('fastboot') && this.get('fastboot.isFastBoot');
    }),

    destinationElementTag: 'div',

    // creates a document fragment that will hold the DOM
    destinationElement: Ember.computed(function () {
      if (!this.get('isFastBoot')) {
        return document.createElement(this.get('destinationElementTag'));
      }
    })
  });
});