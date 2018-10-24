define('ember-paper/components/paper-icon', ['exports', 'ember-paper/templates/components/paper-icon', 'ember-paper/mixins/color-mixin'], function (exports, _paperIcon, _colorMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * @class PaperIcon
   * @extends Ember.Component
   * @uses ColorMixin
   */
  /**
   * @module ember-paper
   */

  let PaperIconComponent = Ember.Component.extend(_colorMixin.default, {
    layout: _paperIcon.default,
    tagName: 'md-icon',
    classNames: ['paper-icon', 'md-font', 'material-icons', 'md-default-theme'],
    classNameBindings: ['spinClass'],
    attributeBindings: ['aria-label', 'title', 'sizeStyle:style', 'iconClass:md-font-icon'],

    icon: '',
    spin: false,
    reverseSpin: false,

    iconClass: Ember.computed('icon', 'positionalIcon', function () {
      let icon = this.getWithDefault('positionalIcon', this.get('icon'));
      return icon;
    }),

    'aria-label': Ember.computed.reads('iconClass'),

    spinClass: Ember.computed('spin', 'reverseSpin', function () {
      if (this.get('spin')) {
        return 'md-spin';
      } else if (this.get('reverseSpin')) {
        return 'md-spin-reverse';
      }
    }),

    sizeStyle: Ember.computed('size', function () {
      let size = this.get('size');

      if (size) {
        return Ember.String.htmlSafe(`height: ${size}px; min-height: ${size}px; min-width: ${size}px; font-size: ${size}px; line-height: ${size}px;`);
      }
    })
  });

  PaperIconComponent.reopenClass({
    positionalParams: ['positionalIcon']
  });

  exports.default = PaperIconComponent;
});