define('ember-paper/components/paper-reset-button', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionMixin.default, {
    tagName: 'button',
    attributeBindings: ['tabindex'],
    transitionClass: 'ng',
    onReset: null,

    mouseUp(e) {
      let onReset = this.get('onReset');
      if (onReset === null) {
        return;
      }
      onReset(e);
    },

    didTransitionOut() {
      this._super(...arguments);
      if (this.get('onDidTransitionOut')) {
        this.get('onDidTransitionOut')();
      }
    }
  });
});