define('ember-paper/components/paper-button', ['exports', 'ember-paper/templates/components/paper-button', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/proxiable-mixin', 'ember-invoke-action'], function (exports, _paperButton, _focusableMixin, _rippleMixin, _colorMixin, _proxiableMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _rippleMixin.default, _colorMixin.default, _proxiableMixin.default, {
    layout: _paperButton.default,
    tagName: 'button',
    classNames: ['md-default-theme', 'md-button'],
    raised: false,
    iconButton: false,
    fab: Ember.computed.reads('mini'), // circular button
    mini: false,
    type: 'button',
    href: null,
    target: null,
    attributeBindings: ['type', 'href', 'target', 'title', 'download', 'rel'],
    classNameBindings: ['raised:md-raised', 'iconButton:md-icon-button', 'fab:md-fab', 'mini:md-mini'],

    // Ripple Overrides
    rippleContainerSelector: null,
    fitRipple: Ember.computed.readOnly('iconButton'),
    center: Ember.computed.readOnly('iconButton'),
    dimBackground: Ember.computed.not('iconButton'),

    init() {
      this._super(...arguments);
      if (this.get('href')) {
        this.setProperties({
          tagName: 'a',
          type: null
        });
      }
    },

    click(e) {
      (0, _emberInvokeAction.invokeAction)(this, 'onClick', e);
      // Prevent bubbling, if specified. If undefined, the event will bubble.
      return this.get('bubbles');
    }
  });
});