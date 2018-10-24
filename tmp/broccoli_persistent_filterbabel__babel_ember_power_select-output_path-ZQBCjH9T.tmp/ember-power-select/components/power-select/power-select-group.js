define('ember-power-select/components/power-select/power-select-group', ['exports', 'ember-power-select/templates/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _powerSelectGroup.default,
    tagName: '',
    disabled: Ember.computed.reads('group.disabled'),
    groupName: Ember.computed.reads('group.groupName')
  });
});