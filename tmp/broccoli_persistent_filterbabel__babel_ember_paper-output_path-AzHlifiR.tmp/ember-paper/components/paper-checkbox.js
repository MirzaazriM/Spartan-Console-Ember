define('ember-paper/components/paper-checkbox', ['exports', 'ember-paper/templates/components/paper-checkbox', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/proxiable-mixin', 'ember-invoke-action'], function (exports, _paperCheckbox, _focusableMixin, _rippleMixin, _colorMixin, _proxiableMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _rippleMixin.default, _colorMixin.default, _proxiableMixin.default, {
    layout: _paperCheckbox.default,
    tagName: 'md-checkbox',
    classNames: ['md-checkbox', 'md-default-theme'],
    classNameBindings: ['isChecked:md-checked', 'indeterminate:md-indeterminate'],

    /* RippleMixin Overrides */
    rippleContainerSelector: '.md-container',
    center: true,
    dimBackground: false,
    fitRipple: true,

    /* FocusableMixin Overrides */
    focusOnlyOnKey: true,

    constants: Ember.inject.service(),

    value: false,

    notIndeterminate: Ember.computed.not('indeterminate'),
    isChecked: Ember.computed.and('notIndeterminate', 'value'),

    init() {
      this._super(...arguments);
      (true && !(this.get('onChange') !== undefined) && Ember.assert('{{paper-checkbox}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined));
    },

    click() {
      if (!this.get('disabled')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onChange', !this.get('value'));
      }
      // Prevent bubbling, if specified. If undefined, the event will bubble.
      return this.get('bubbles');
    },

    keyPress(ev) {
      if (ev.which === this.get('constants.KEYCODE.SPACE') || ev.which === this.get('constants.KEYCODE.ENTER')) {
        ev.preventDefault();
        this.click();
      }
    },

    processProxy() {
      (0, _emberInvokeAction.invokeAction)(this, 'onChange', !this.get('value'));
    }
  });
});