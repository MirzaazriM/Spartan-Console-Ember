define('ember-paper/components/paper-select-trigger', ['exports', 'ember-power-select/components/power-select/trigger', 'ember-paper/templates/components/paper-select-trigger'], function (exports, _trigger, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _trigger.default.extend({
    layout: _paperSelectTrigger.default,
    tagName: 'md-select-value',
    classNames: ['md-select-value'],
    classNameBindings: ['isPlaceholder:md-select-placeholder'],
    isPlaceholder: Ember.computed('placeholder', 'label', 'select.selected', function () {
      return (this.get('placeholder') || this.get('label')) && !this.get('select.selected');
    })
  });
});