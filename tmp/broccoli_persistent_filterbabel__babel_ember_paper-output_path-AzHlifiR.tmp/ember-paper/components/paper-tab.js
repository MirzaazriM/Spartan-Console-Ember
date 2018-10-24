define('ember-paper/components/paper-tab', ['exports', 'ember-paper/templates/components/paper-tab', 'ember-composability-tools', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/focusable-mixin', 'ember-invoke-action'], function (exports, _paperTab, _emberComposabilityTools, _rippleMixin, _focusableMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_emberComposabilityTools.ChildMixin, _rippleMixin.default, _focusableMixin.default, {
    layout: _paperTab.default,
    tagName: 'md-tab-item',
    classNames: ['md-tab'],
    classNameBindings: ['isSelected:md-active'],
    attributeBindings: ['isSelected:aria-selected', 'style', 'maybeHref:href'],

    rippleContainerSelector: null,

    // <a> tags have browser styles or are usually styled by the user
    // this makes sure that tab item still looks good with an anchor tag
    style: Ember.computed('href', function () {
      if (this.get('href')) {
        return Ember.String.htmlSafe('text-decoration: none; border: none;');
      }
    }),

    maybeHref: Ember.computed('href', 'disabled', function () {
      if (this.get('href') && !this.get('disabled')) {
        return this.get('href');
      }
    }),

    isSelected: Ember.computed('selected', 'value', function () {
      return this.get('selected') === this.get('value');
    }),

    init() {
      this._super(...arguments);
      if (this.get('href')) {
        this.set('tagName', 'a');
      }
    },

    didInsertElement() {
      this._super(...arguments);
      let width = this.element.offsetWidth;
      // this is the initial tab width
      // it is used to calculate if we need pagination or not
      this.set('width', width);
    },

    didRender() {
      this._super(...arguments);
      this.updateDimensions();
    },

    // this method is also called by the parent
    updateDimensions() {
      let left = this.element.offsetLeft;
      // this is the true current width
      // it is used to calculate the ink bar position
      let currentWidth = this.element.offsetWidth;
      this.setProperties({ left, currentWidth });
    },

    click() {

      if (!this.get('disabled')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onClick', ...arguments);
        (0, _emberInvokeAction.invokeAction)(this, 'onSelect', this);
      }
    }
  });
});