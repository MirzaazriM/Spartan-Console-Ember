define('ember-paper/components/paper-input', ['exports', 'ember-paper/templates/components/paper-input', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/child-mixin', 'ember-paper/mixins/validation-mixin', 'ember-invoke-action'], function (exports, _paperInput, _focusableMixin, _colorMixin, _childMixin, _validationMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _colorMixin.default, _childMixin.default, _validationMixin.default, {
    layout: _paperInput.default,
    tagName: 'md-input-container',
    classNames: ['md-default-theme'],
    classNameBindings: ['hasValue:md-input-has-value', 'isInvalidAndTouched:md-input-invalid', 'hasLeftIcon:md-icon-left', 'hasRightIcon:md-icon-right', 'focused:md-input-focused', 'block:md-block'],
    type: 'text',
    autofocus: false,
    tabindex: null,
    hideAllMessages: false,
    isTouched: false,

    iconComponent: 'paper-icon',

    // override validation mixin `isInvalid` to account for the native input validity
    isInvalid: Ember.computed.or('hasErrorMessages', 'isNativeInvalid'),

    hasValue: Ember.computed('value', 'isNativeInvalid', function () {
      let value = this.get('value');
      let isNativeInvalid = this.get('isNativeInvalid');
      return !Ember.isEmpty(value) || isNativeInvalid;
    }),

    shouldAddPlaceholder: Ember.computed('label', 'focused', function () {
      // if has label, only add placeholder when focused
      return Ember.isEmpty(this.get('label')) || this.get('focused');
    }),

    inputElementId: Ember.computed('elementId', function () {
      return `input-${this.get('elementId')}`;
    }),

    renderCharCount: Ember.computed('value', function () {
      let currentLength = this.get('value') ? this.get('value').length : 0;
      return `${currentLength}/${this.get('maxlength')}`;
    }),

    hasLeftIcon: Ember.computed.bool('icon'),
    hasRightIcon: Ember.computed.bool('iconRight'),
    isInvalidAndTouched: Ember.computed.and('isInvalid', 'isTouched'),

    validationProperty: 'value', // property that validations should be run on

    // Lifecycle hooks
    didReceiveAttrs() {
      this._super(...arguments);
      (true && !(this.get('onChange') !== undefined) && Ember.assert('{{paper-input}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined));


      let { value, errors } = this.getProperties('value', 'errors');
      let { _prevValue, _prevErrors } = this.getProperties('_prevValue', '_prevErrors');
      if (value !== _prevValue || errors !== _prevErrors) {
        this.notifyValidityChange();
      }
      this._prevValue = value;
      this._prevErrors = errors;
    },

    didInsertElement() {
      this._super(...arguments);
      if (this.get('textarea')) {
        Ember.$(window).on(`resize.${this.elementId}`, Ember.run.bind(this, this.growTextarea));
      }
    },

    didRender() {
      this._super(...arguments);
      // setValue below ensures that the input value is the same as this.value
      this.setValue(this.get('value'));
      this.growTextarea();
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this.get('textarea')) {
        Ember.$(window).off(`resize.${this.elementId}`);
      }
    },

    growTextarea() {
      if (this.get('textarea')) {
        let inputElement = this.$('input, textarea');
        inputElement.addClass('md-no-flex').attr('rows', 1);

        let minRows = this.get('passThru.rows');
        let height = this.getHeight(inputElement);
        if (minRows) {
          if (!this.lineHeight) {
            inputElement.get(0).style.minHeight = 0;
            this.lineHeight = inputElement.get(0).clientHeight;
            inputElement.get(0).style.minHeight = null;
          }
          if (this.lineHeight) {
            height = Math.max(height, this.lineHeight * minRows);
          }
          let proposedHeight = Math.round(height / this.lineHeight);
          let maxRows = this.get('passThru.maxRows') || Number.MAX_VALUE;
          let rowsToSet = Math.min(proposedHeight, maxRows);
          inputElement.css('height', `${this.lineHeight * rowsToSet}px`).attr('rows', rowsToSet).toggleClass('md-textarea-scrollable', proposedHeight >= maxRows);
        } else {
          inputElement.css('height', 'auto');
          inputElement.get(0).scrollTop = 0;
          let height = this.getHeight(inputElement);
          if (height) {
            inputElement.css('height', `${height}px`);
          }
        }

        inputElement.removeClass('md-no-flex');
      }
    },

    getHeight(inputElement) {
      let { offsetHeight } = inputElement.get(0);
      let line = inputElement.get(0).scrollHeight - offsetHeight;
      return offsetHeight + (line > 0 ? line : 0);
    },

    setValue(value) {
      if (this.$('input, textarea').val() !== value) {
        this.$('input, textarea').val(value);
      }
    },

    actions: {
      handleInput(e) {
        (0, _emberInvokeAction.invokeAction)(this, 'onChange', e.target.value);
        // setValue below ensures that the input value is the same as this.value
        Ember.run.next(() => {
          if (this.isDestroyed) {
            return;
          }
          this.setValue(this.get('value'));
        });
        this.growTextarea();
        let inputElement = this.$('input').get(0);
        this.set('isNativeInvalid', inputElement && inputElement.validity && inputElement.validity.badInput);
        this.notifyValidityChange();
      },

      handleBlur(e) {
        (0, _emberInvokeAction.invokeAction)(this, 'onBlur', e);
        this.set('isTouched', true);
        this.notifyValidityChange();
      }
    }
  });
});