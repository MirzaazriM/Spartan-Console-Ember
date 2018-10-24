define('ember-paper/components/paper-tooltip', ['exports', 'ember-paper/templates/components/paper-tooltip', 'ember-paper/utils/get-parent', 'ember-paper/utils/browser-features'], function (exports, _paperTooltip, _getParent, _browserFeatures) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    layout: _paperTooltip.default,

    position: 'bottom',

    wormholeSelector: '#paper-wormhole',
    defaultedParent: Ember.computed.or('parent', 'wormholeSelector'),

    // Calculate the id of the wormhole destination, setting it if need be. The
    // id is that of the 'parent', if provided, or 'paper-wormhole' if not.
    destinationId: Ember.computed('defaultedParent', function () {
      let config = Ember.getOwner(this).resolveRegistration('config:environment');

      if (config.environment === 'test' && !this.get('parent')) {
        return '#ember-testing';
      }
      let parent = this.get('defaultedParent');
      let $parent = Ember.$(parent);
      // If the parent isn't found, assume that it is an id, but that the DOM doesn't
      // exist yet. This only happens during integration tests or if entire application
      // route is a dialog.
      if ($parent.length === 0 && parent.charAt(0) === '#') {
        return `#${parent.substring(1)}`;
      } else {
        let id = $parent.attr('id');
        if (!id) {
          id = `${this.elementId}-parent`;
          $parent.get(0).id = id;
        }
        return `#${id}`;
      }
    }),

    // Find the element referenced by destinationId
    destinationEl: Ember.computed('destinationId', function () {
      return document.querySelector(this.get('destinationId'));
    }),

    zIndex: 100,

    containerStyle: Ember.computed('zIndex', function () {
      return Ember.String.htmlSafe(`pointer-events: none; z-index: ${this.get('zIndex')};`);
    }),

    anchorElement: Ember.computed('attachTo', function () {
      let attachTo = this.get('attachTo');
      if (attachTo) {
        return Ember.$(attachTo).get(0);
      } else {
        return (0, _getParent.default)(this);
      }
    }),

    didInsertElement() {
      this._super(...arguments);
      let anchorElement = this.get('anchorElement');

      let leaveHandler = () => {
        if (!this.isDestroyed) {
          this.set('hideTooltip', true);
          Ember.run.later(() => {
            if (!this.isDestroyed) {
              this.set('renderTooltip', false);
            }
          }, 150);

          anchorElement.addEventListener('blur', leaveHandler);
          anchorElement.addEventListener('touchcancel', leaveHandler);
          anchorElement.addEventListener('mouseleave', leaveHandler);
        }
      };

      let enterEventHandler = () => {
        anchorElement.addEventListener('blur', leaveHandler);
        anchorElement.addEventListener('touchcancel', leaveHandler);
        anchorElement.addEventListener('mouseleave', leaveHandler);

        if (!this.isDestroyed) {
          this.set('renderTooltip', true);
          this.set('hideTooltip', false);
        }
      };

      anchorElement.addEventListener('focus', enterEventHandler);
      anchorElement.addEventListener('mouseenter', enterEventHandler);
      anchorElement.addEventListener('touchstart', enterEventHandler, _browserFeatures.supportsPassiveEventListeners ? { passive: true } : false);

      window.addEventListener('scroll', leaveHandler);
      window.addEventListener('blur', leaveHandler);
      window.addEventListener('resize', leaveHandler);
      window.addEventListener('orientationchange', leaveHandler);
      this.leaveHandler = leaveHandler;
    },

    willDestroyElement() {
      this._super(...arguments);
      window.removeEventListener('scroll', this.leaveHandler);
      window.removeEventListener('blur', this.leaveHandler);
      window.removeEventListener('resize', this.leaveHandler);
      window.removeEventListener('orientationchange', this.leaveHandler);
    }
  });
});