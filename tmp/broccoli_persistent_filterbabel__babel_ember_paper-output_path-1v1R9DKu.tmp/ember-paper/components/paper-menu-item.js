define('ember-paper/components/paper-menu-item', ['exports', 'ember-paper/templates/components/paper-menu-item', 'ember-paper/mixins/child-mixin', 'ember-invoke-action'], function (exports, _paperMenuItem, _childMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_childMixin.default, {
    layout: _paperMenuItem.default,
    tagName: 'md-menu-item',
    disabled: false,

    shouldRenderButton: Ember.computed.or('onClick', 'href'),

    actions: {
      handleClick(e) {
        this.get('dropdown.actions').close();
        (0, _emberInvokeAction.invokeAction)(this, 'onClick', e);
      }
    },

    mouseEnter() {
      if (!this.get('disabled')) {
        this.$('button').focus();
      }
    }
  });
});