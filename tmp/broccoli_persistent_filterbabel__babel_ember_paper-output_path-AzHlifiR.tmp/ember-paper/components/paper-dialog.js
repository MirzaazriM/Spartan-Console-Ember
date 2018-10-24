define('ember-paper/components/paper-dialog', ['exports', 'ember-paper/templates/components/paper-dialog', 'ember-invoke-action'], function (exports, _paperDialog, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperDialog.default,
    tagName: '',

    escapeToClose: true,
    focusOnOpen: true,
    opaque: true,

    // Calculate a default that is always valid for the parent of the backdrop.
    wormholeSelector: '#paper-wormhole',
    defaultedParent: Ember.computed.or('parent', 'wormholeSelector'),

    // Calculate a default that is always valid where the opening transition should originate.
    defaultedOpenFrom: Ember.computed.or('openFrom', 'origin', 'parent'),

    // Calculate a default that is always valid where the closing transition should terminate.
    defaultedCloseTo: Ember.computed.or('closeTo', 'origin', 'parent'),

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

    constants: Ember.inject.service(),

    didInsertElement() {
      this._super(...arguments);
      if (this.get('escapeToClose')) {
        Ember.$(this.get('destinationId')).on(`keydown.${this.elementId}`, e => {
          if (e.keyCode === this.get('constants.KEYCODE.ESCAPE') && this.get('onClose')) {
            (0, _emberInvokeAction.invokeAction)(this, 'onClose');
          }
        });
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this.get('escapeToClose')) {
        Ember.$(this.get('destinationId')).off(`keydown.${this.elementId}`);
      }
    },

    actions: {
      outsideClicked() {
        if (this.get('clickOutsideToClose') && this.get('onClose')) {
          (0, _emberInvokeAction.invokeAction)(this, 'onClose');
        }
      }
    }
  });
});