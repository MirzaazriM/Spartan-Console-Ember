define('ember-paper/components/paper-backdrop', ['exports', 'ember-css-transitions/mixins/transition-mixin', 'ember-invoke-action'], function (exports, _transitionMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionMixin.default, {

    tagName: 'md-backdrop',
    classNames: ['md-default-theme'],
    classNameBindings: ['opaque:md-opaque', 'isLockedOpen:md-locked-open'],
    attributeBindings: ['backdropStyle:style'],

    // TransitionMixin:
    transitionName: 'ng',
    shouldTransition: Ember.computed.bool('opaque'),

    backdropStyle: Ember.computed('fixed', function () {
      return this.get('fixed') ? Ember.String.htmlSafe('position:fixed;') : null;
    }),

    addDestroyedElementClone(original, clone) {
      original.parentNode.appendChild(clone);
    },

    sendClickAction(e) {
      e.preventDefault();
      (0, _emberInvokeAction.invokeAction)(this, 'onClick', e);
    },

    click(e) {
      this.sendClickAction(e);
    },

    // needed for iOS
    // iOS doesn't trigger a click event on normal divs
    // unless we use `cursor: pointer` css
    touchEnd(e) {
      this.sendClickAction(e);
    }
  });
});