define('ember-paper/components/paper-item', ['exports', 'ember-paper/templates/components/paper-item', 'ember-paper/mixins/ripple-mixin', 'ember-composability-tools', 'ember-invoke-action'], function (exports, _paperItem, _rippleMixin, _emberComposabilityTools, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_rippleMixin.default, _emberComposabilityTools.ParentMixin, {
    layout: _paperItem.default,
    tagName: 'md-list-item',

    // Ripple Overrides
    rippleContainerSelector: '.md-no-style',
    // disable ripple when we have a primary action or when we don't have a proxied component
    noink: Ember.computed('hasPrimaryAction', 'hasProxiedComponent', function () {
      return this.get('hasPrimaryAction') || !this.get('hasProxiedComponent');
    }),

    center: false,
    dimBackground: true,
    outline: false,

    classNameBindings: ['hasProxiedComponent:md-proxy-focus', 'shouldBeClickable:md-clickable', 'focused:md-focused', 'hasPrimaryAction:_md-button-wrap'],
    attributeBindings: ['role', 'tabindex', 'title'],
    role: 'listitem',
    tabindex: '-1',

    proxiedComponents: Ember.computed.filter('childComponents', function (c) {
      return !c.get('skipProxy');
    }),

    hasProxiedComponent: Ember.computed.bool('proxiedComponents.length'),
    shouldBeClickable: Ember.computed.or('hasProxiedComponent', 'onClick'),

    hasPrimaryAction: Ember.computed.or('onClick', 'href'),

    noProxy: Ember.computed('hasPrimaryAction', 'hasProxiedComponent', function () {
      return !this.get('hasPrimaryAction') && !this.get('hasProxiedComponent');
    }),

    secondaryItem: Ember.computed('proxiedComponents.[]', function () {
      let proxiedComponents = this.get('proxiedComponents');
      return proxiedComponents.objectAt(0);
    }),

    click() {
      this.get('proxiedComponents').forEach(component => {
        if (component.processProxy && !component.get('disabled') && component.get('bubbles') | !this.get('hasPrimaryAction')) {
          component.processProxy();
        }
      });
    },

    mouseEnter(e) {
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseEnter', e);
    },

    mouseLeave(e) {
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseLeave', e);
    }
  });
});