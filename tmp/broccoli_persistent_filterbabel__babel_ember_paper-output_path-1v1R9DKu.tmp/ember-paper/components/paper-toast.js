define('ember-paper/components/paper-toast', ['exports', 'ember-paper/templates/components/paper-toast', 'ember-invoke-action'], function (exports, _paperToast, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperToast.default,
    tagName: '',
    escapeToClose: false,
    swipeToClose: true,
    capsule: false,
    duration: 3000,

    position: 'bottom left',

    left: Ember.computed('position', function () {
      let [, x] = this.get('position').split(' ');
      return x === 'left';
    }),

    top: Ember.computed('position', function () {
      let [y] = this.get('position').split(' ');
      return y === 'top';
    }),

    // Calculate a default that is always valid for the parent of the backdrop.
    wormholeSelector: '#paper-toast-fab-wormhole',
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
          id = `${this.uniqueId}-parent`;
          $parent.get(0).id = id;
        }
        return `#${id}`;
      }
    }),

    // Find the element referenced by destinationId
    destinationEl: Ember.computed('destinationId', function () {
      return document.querySelector(this.get('destinationId'));
    }),

    constants: Ember.inject.service(),

    _destroyMessage() {
      if (!this.isDestroyed) {
        (0, _emberInvokeAction.invokeAction)(this, 'onClose');
      }
    },

    init() {
      this._super(...arguments);
      this.uniqueId = Ember.guidFor(this);
    },

    willInsertElement() {
      this._super(...arguments);
      Ember.$(this.get('destinationId')).addClass('md-toast-animating');
    },

    didInsertElement() {
      this._super(...arguments);

      if (this.get('duration') !== false) {
        Ember.run.later(this, '_destroyMessage', this.get('duration'));
      }

      if (this.get('escapeToClose')) {
        // Adding Listener to body tag, FIXME
        Ember.$('body').on(`keydown.${this.uniqueId}`, e => {
          if (e.keyCode === this.get('constants.KEYCODE.ESCAPE') && this.get('onClose')) {
            this._destroyMessage();
          }
        });
      }

      let y = this.get('top') ? 'top' : 'bottom';
      Ember.$(this.get('destinationId')).addClass(`md-toast-open-${y}`);
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this.get('escapeToClose')) {
        Ember.$('body').off(`keydown.${this.uniqueId}`);
      }

      let y = this.get('top') ? 'top' : 'bottom';
      Ember.$(this.get('destinationId')).removeClass(`md-toast-open-${y} md-toast-animating`);
    },

    swipeAction() {
      if (this.get('swipeToClose')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onClose');
      }
    }
  });
});