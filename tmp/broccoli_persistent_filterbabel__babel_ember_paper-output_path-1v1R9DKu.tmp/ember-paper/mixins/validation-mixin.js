define('ember-paper/mixins/validation-mixin', ['exports', 'ember-paper/validators/required', 'ember-paper/validators/min', 'ember-paper/validators/max', 'ember-paper/validators/minlength', 'ember-paper/validators/maxlength', 'ember-invoke-action'], function (exports, _required, _min, _max, _minlength, _maxlength, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * In order to make validation generic it is required that components using the validation mixin
   * specify what property the validation logic should be based on.
   *
   * @public
   *
   * @return computed property that depends on the supplied property name
   */
  /**
   * @module ember-paper
   */

  function buildComputedValidationMessages(property, validations = [], customValidations = []) {
    let validationParams = validations.map(v => Ember.get(v, 'param')).filter(v => !Ember.isBlank(v));
    let customValidationParams = customValidations.map(v => Ember.get(v, 'param')).filter(v => !Ember.isBlank(v));

    return Ember.computed(property, 'errors.[]', 'customValidations.[]', ...validationParams, ...customValidationParams, function () {
      let validations = Ember.A();
      let messages = Ember.A();

      // built-in validations
      validations.pushObjects(this.validations());

      // custom validations
      let customValidations = this.get('customValidations');
      (true && !(Ember.isArray(customValidations)) && Ember.assert('`customValidations` must be an array', Ember.isArray(customValidations)));

      validations.pushObjects(customValidations);

      // execute validations
      let currentValue = this.get(property);
      validations.forEach(validation => {
        (true && !(validation && validation.validate && typeof validation.validate === 'function') && Ember.assert('validation must include an `validate(value)` function', validation && validation.validate && typeof validation.validate === 'function'));

        try {
          let valParam = Ember.get(validation, 'param');
          let paramValue = valParam ? this.get(valParam) : undefined;
          if (!validation.validate(currentValue, paramValue)) {
            let message = this.get(`errorMessages.${valParam}`) || Ember.get(validation, 'message');
            messages.pushObject({
              message: Ember.String.loc(message.string || message, paramValue, currentValue)
            });
          }
        } catch (error) {
          (true && Ember.warn(`Exception with validation: ${validation} ${error}`, false));
        }
      });

      // error messages array
      let errors = this.get('errors') || [];
      (true && !(Ember.isArray(errors)) && Ember.assert('`errors` must be an array', Ember.isArray(errors)));

      messages.pushObjects(errors.map(e => {
        return Ember.get(e, 'message') ? e : { message: e };
      }));

      return messages;
    });
  }

  /**
   * @class ValidationMixin
   * @extends Ember.Mixin
   */
  exports.default = Ember.Mixin.create({
    validationErrorMessages: null,
    lastIsInvalid: undefined,
    validationProperty: null, // property that validation should be based on

    init() {
      this._super(...arguments);
      (true && !(this.get('validationProperty')) && Ember.assert('validationProperty must be set', this.get('validationProperty')));

      if (!this.get('validationErrorMessages')) {
        let computedValidationMessages = buildComputedValidationMessages(this.get('validationProperty'), this.validations(), this.get('customValidations'));
        Ember.defineProperty(this, 'validationErrorMessages', computedValidationMessages);
      }
    },

    hasErrorMessages: Ember.computed.bool('validationErrorMessages.length'),

    /**
     * The result of isInvalid is appropriate for controlling the display of
     * validation error messages. It also may be used to distinguish whether
     * the input would be considered valid after it is touched.
     *
     * @public
     *
     * @return {boolean} Whether the input is or would be invalid.
     *    false: input is valid (touched or not), or is no longer rendered
     *    true: input has been touched and is invalid.
     */
    isInvalid: Ember.computed.reads('hasErrorMessages'),
    isValid: Ember.computed.not('isInvalid'),

    /**
     * Return the built-in validations.
     *
     * May be overridden to provide additional built-in validations. Be sure to
     * call this._super() to retrieve the standard validations.
     *
     * @public
     */
    validations() {
      return [_required.default, _min.default, _max.default, _minlength.default, _maxlength.default];
    },

    notifyValidityChange() {
      let isValid = this.get('isValid');
      let lastIsValid = this.get('lastIsValid');
      let isTouched = this.get('isTouched');
      let lastIsTouched = this.get('lastIsTouched');
      if (lastIsValid !== isValid || lastIsTouched !== isTouched) {
        (0, _emberInvokeAction.invokeAction)(this, 'onValidityChange', isValid);
        this.set('lastIsValid', isValid);
        this.set('lastIsTouched', isTouched);
      }
    },
    customValidations: [],
    errors: []
  });
});