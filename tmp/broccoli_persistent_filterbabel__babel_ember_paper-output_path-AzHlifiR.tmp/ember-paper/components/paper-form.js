define('ember-paper/components/paper-form', ['exports', 'ember-paper/templates/components/paper-form', 'ember-paper/mixins/parent-mixin', 'ember-invoke-action'], function (exports, _paperForm, _parentMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_parentMixin.default, {
    layout: _paperForm.default,
    tagName: 'form',

    inputComponent: 'paper-input',
    submitButtonComponent: 'paper-button',
    selectComponent: 'paper-select',
    autocompleteComponent: 'paper-autocomplete',

    isValid: Ember.computed.not('isInvalid'),
    isInvalid: Ember.computed('childComponents.@each.isInvalid', function () {
      return this.get('childComponents').isAny('isInvalid');
    }),

    isTouched: Ember.computed('childComponents.@each.isTouched', function () {
      return this.get('childComponents').isAny('isTouched');
    }),

    isInvalidAndTouched: Ember.computed.and('isInvalid', 'isTouched'),

    submit() {
      this.send('onSubmit');
      return false;
    },

    actions: {
      onValidityChange() {
        if (this.get('lastIsValid') !== this.get('isValid') || this.get('lastIsTouched') !== this.get('isTouched')) {
          (0, _emberInvokeAction.invokeAction)(this, 'onValidityChange', this.get('isValid'), this.get('isTouched'), this.get('isInvalidAndTouched'));
          this.set('lastIsValid', this.get('isValid'));
          this.set('lastIsTouched', this.get('isTouched'));
        }
      },
      onSubmit() {
        if (this.get('isInvalid')) {
          this.get('childComponents').setEach('isTouched', true);
          (0, _emberInvokeAction.invokeAction)(this, 'onInvalid');
        } else {
          (0, _emberInvokeAction.invokeAction)(this, 'onSubmit');
          this.get('childComponents').setEach('isTouched', false);
        }
      }
    }
  });
});