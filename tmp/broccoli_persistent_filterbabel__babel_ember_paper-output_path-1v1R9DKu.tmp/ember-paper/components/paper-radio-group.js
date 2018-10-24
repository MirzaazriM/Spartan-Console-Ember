define('ember-paper/components/paper-radio-group', ['exports', 'ember-paper/templates/components/paper-radio-group', 'ember-paper/mixins/focusable-mixin', 'ember-composability-tools', 'ember-invoke-action'], function (exports, _paperRadioGroup, _focusableMixin, _emberComposabilityTools, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _emberComposabilityTools.ParentMixin, {
    layout: _paperRadioGroup.default,
    tagName: 'md-radio-group',
    tabindex: 0,

    /* FocusableMixin Overrides */
    focusOnlyOnKey: true,

    radioComponent: 'paper-radio',

    constants: Ember.inject.service(),

    // Lifecycle hooks
    init() {
      this._super(...arguments);
      (true && !(this.get('onChange') !== undefined) && Ember.assert('{{paper-radio-group}} requires an `onChange` action or null for no action', this.get('onChange') !== undefined));
    },

    enabledChildRadios: Ember.computed.filterBy('childComponents', 'disabled', false),
    childValues: Ember.computed.mapBy('enabledChildRadios', 'value'),

    keyDown(ev) {

      switch (ev.which) {
        case this.get('constants.KEYCODE.LEFT_ARROW'):
        case this.get('constants.KEYCODE.UP_ARROW'):
          ev.preventDefault();
          this.select(-1);
          break;
        case this.get('constants.KEYCODE.RIGHT_ARROW'):
        case this.get('constants.KEYCODE.DOWN_ARROW'):
          ev.preventDefault();
          this.select(1);
          break;
      }
    },

    select(increment) {
      let groupValue = this.get('groupValue');
      let index = 0;

      if (Ember.isPresent(groupValue)) {
        index = this.get('childValues').indexOf(groupValue);
        index += increment;
        let length = this.get('childValues.length');
        index = (index % length + length) % length;
      }

      let childRadio = this.get('enabledChildRadios').objectAt(index);
      childRadio.set('focused', true);
      (0, _emberInvokeAction.invokeAction)(this, 'onChange', childRadio.get('value'));
    },

    actions: {
      onChange(value) {
        (0, _emberInvokeAction.invokeAction)(this, 'onChange', value);
      }
    }
  });
});