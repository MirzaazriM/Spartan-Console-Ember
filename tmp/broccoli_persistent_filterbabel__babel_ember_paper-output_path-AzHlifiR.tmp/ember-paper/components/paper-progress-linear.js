define('ember-paper/components/paper-progress-linear', ['exports', 'ember-paper/templates/components/paper-progress-linear', 'ember-paper/mixins/color-mixin'], function (exports, _paperProgressLinear, _colorMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function makeTransform(value) {
    let scale = value / 100;
    let translateX = (value - 100) / 2;
    return `translateX(${translateX.toString()}%) scale(${scale.toString()}, 1)`;
  } /**
     * @module ember-paper
     */


  const MODE_DETERMINATE = 'determinate';
  const MODE_INDETERMINATE = 'indeterminate';
  const MODE_BUFFER = 'buffer';
  const MODE_QUERY = 'query';

  /**
   * @class PaperProgressLinear
   * @extends Ember.Component
   * @uses ColorMixin
   */
  exports.default = Ember.Component.extend(_colorMixin.default, {
    layout: _paperProgressLinear.default,
    tagName: 'md-progress-linear',

    attributeBindings: ['mode:md-mode', 'bufferValue:md-buffer-value'],
    classNames: ['md-default-theme'],

    constants: Ember.inject.service(),

    mode: Ember.computed('value', function () {
      let value = this.get('value');
      let bufferValue = this.get('bufferValue');

      if (Ember.isPresent(value)) {
        if (Ember.isPresent(bufferValue)) {
          return MODE_BUFFER;
        } else {
          return MODE_DETERMINATE;
        }
      } else {
        return MODE_INDETERMINATE;
      }
    }),

    queryModeClass: Ember.computed('mode', function () {
      let mode = this.get('mode');
      if ([MODE_QUERY, MODE_BUFFER, MODE_DETERMINATE, MODE_INDETERMINATE].includes(mode)) {
        return `md-mode-${mode}`;
      } else {
        return '';
      }
    }),

    bar1Style: Ember.computed('clampedBufferValue', function () {
      return Ember.String.htmlSafe(`${this.get('constants.CSS.TRANSFORM')}: ${makeTransform(this.get('clampedBufferValue'))}`);
    }),

    bar2Style: Ember.computed('clampedValue', 'mode', function () {
      if (this.get('mode') === MODE_QUERY) {
        return Ember.String.htmlSafe('');
      }

      return Ember.String.htmlSafe(`${this.get('constants.CSS.TRANSFORM')}: ${makeTransform(this.get('clampedValue'))}`);
    }),

    clampedValue: Ember.computed('value', function () {
      let value = this.get('value');
      return Math.max(0, Math.min(value || 0, 100));
    }),

    clampedBufferValue: Ember.computed('bufferValue', function () {
      let value = this.get('bufferValue');
      return Math.max(0, Math.min(value || 0, 100));
    })

  });
});