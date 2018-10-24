define('ember-paper/components/paper-speed-dial', ['exports', 'ember-paper/templates/components/paper-speed-dial', 'ember-invoke-action'], function (exports, _paperSpeedDial, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperSpeedDial.default,
    tagName: 'md-fab-speed-dial',

    classNameBindings: ['directionClass', 'open:md-is-open', 'animationClass', 'shouldHideActions:md-animations-waiting', 'hoverFull:md-hover-full'],

    open: false,

    animation: 'fling',
    animationClass: Ember.computed('animation', function () {
      return `md-${this.get('animation')}`;
    }),

    direction: 'down',
    directionClass: Ember.computed('direction', function () {
      return `md-${this.get('direction')}`;
    }),

    shouldHideActions: Ember.computed('animation', 'elementDidRender', function () {
      return this.get('animation') === 'fling' && !this.get('elementDidRender');
    }),

    didRender() {
      this._super(...arguments);
      Ember.run.next(() => {
        if (!this.isDestroyed && !this.isDestroying) {
          this.set('elementDidRender', true);
        }
      });
    },

    mouseEnter() {
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseEnter');
    },

    mouseLeave() {
      (0, _emberInvokeAction.invokeAction)(this, 'onMouseLeave');
    },

    toggle() {
      this.changeOpenValue(!this.get('open'));
    },

    close() {
      this.changeOpenValue(false);
    },

    changeOpenValue(value) {
      // support non DDAU scenario
      if (this.get('onToggle')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', value);
      } else {
        this.set('open', value);
      }
    }
  });
});