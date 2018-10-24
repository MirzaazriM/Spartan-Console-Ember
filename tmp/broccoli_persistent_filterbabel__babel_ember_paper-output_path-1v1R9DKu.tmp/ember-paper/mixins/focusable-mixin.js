define('ember-paper/mixins/focusable-mixin', ['exports', 'ember-paper/mixins/events-mixin', 'ember-invoke-action'], function (exports, _eventsMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create(_eventsMixin.default, {

    disabled: false,
    pressed: false,
    active: false,
    focused: false,
    hover: false,

    classNameBindings: ['focused:md-focused'],
    attributeBindings: ['tabindex', 'disabledAttr:disabled'],

    disabledAttr: Ember.computed('disabled', function () {
      return this.get('disabled') ? 'disabled' : null;
    }),

    // Alow element to be focusable by supplying a tabindex 0
    tabindex: Ember.computed('disabled', function () {
      return this.get('disabled') ? '-1' : '0';
    }),

    toggle: false,

    // Only render the "focused" state if the element gains focus due to
    // keyboard navigation.
    focusOnlyOnKey: false,

    /*
     * Listen to `focusIn` and `focusOut` events instead of `focus` and `blur`.
     * This way we don't need to explicitly bubble the events.
     * They bubble by default.
     */
    focusIn() {
      if (!this.get('disabled') && !this.get('focusOnlyOnKey') || !this.get('pressed')) {
        this.set('focused', true);
      }
    },

    focusOut() {
      this.set('focused', false);
    },

    mouseEnter(e) {
      this.set('hover', true);
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseEnter', e);
    },

    mouseLeave(e) {
      this.set('hover', false);
      this._super(e);
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseLeave', e);
    },

    down() {
      this.set('pressed', true);
      if (this.toggle) {
        this.toggleProperty('active');
      } else {
        this.set('active', true);
      }
    },

    up() {
      this.set('pressed', false);

      if (!this.toggle) {
        this.set('active', false);
      }
    }
  });
});