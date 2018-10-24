define('ember-paper/components/paper-sidenav-inner', ['exports', 'ember-css-transitions/mixins/transition-mixin', 'ember-invoke-action'], function (exports, _transitionMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionMixin.default, {
    tagName: 'md-sidenav',
    attributeBindings: ['tabindex'],
    classNameBindings: ['positionClass'],
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    transitionClassNameBindings: ['isLockedOpen:md-locked-open', 'closed:md-closed'],

    constants: Ember.inject.service(),
    paperSidenav: Ember.inject.service(),

    name: 'default',
    position: 'left',
    lockedOpen: 'gt-sm',
    closed: true,
    closeOnClick: true,
    tabindex: -1,

    positionClass: Ember.computed('position', function () {
      return `md-sidenav-${this.get('position')}`;
    }),

    init() {
      // need to updateLockedOpen() first because otherwise the transition classes
      // would be applied due to transition mixin's `init`
      if (typeof FastBoot === 'undefined') {
        this.updateLockedOpen();
      }
      this._super(...arguments);
      this.get('paperSidenav').register(this.get('name'), this);
    },

    didInsertElement() {
      this._super(...arguments);
      Ember.$(window).on(`resize.${this.elementId}`, Ember.run.bind(this, 'updateLockedOpen'));
      this.updateLockedOpen();
    },

    didReceiveAttrs() {
      this._super(...arguments);
      if (typeof FastBoot === 'undefined') {
        this.updateLockedOpen();
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      Ember.$(window).off(`resize.${this.elementId}`);
      this.get('paperSidenav').unregister(this.get('name'), this);
    },

    updateLockedOpen() {
      let lockedOpen = this.get('lockedOpen');
      let isLockedOpen;

      // if `true` or `false` is specified, always/never "lock open"
      // otherwise proceed with normal matchMedia test
      if (typeof lockedOpen === 'boolean') {
        isLockedOpen = lockedOpen;
      } else {
        let mediaQuery = this.get('constants').MEDIA[lockedOpen] || lockedOpen;
        isLockedOpen = window.matchMedia(mediaQuery).matches;
      }

      let coercedIsLockedOpen = !!this.get('isLockedOpen');

      if (coercedIsLockedOpen !== isLockedOpen) {
        this.set('isLockedOpen', isLockedOpen);

        // if sidenav is open and we enter lockedOpen,
        // make the sidenav enter the "closed" state
        if (!this.get('closed') && isLockedOpen) {
          (0, _emberInvokeAction.invokeAction)(this, 'onToggle', false);
        }
      }
    },

    click() {
      if (this.get('closeOnClick') && !this.get('isLockedOpen')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', false);
      }
    },

    open() {
      if (this.get('closed') && this.get('isLockedOpen')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', true);
      }
    },

    close() {
      if (!this.get('closed') && !this.get('isLockedOpen')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', false);
      }
    },

    toggle() {
      if (!this.get('isLockedOpen')) {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', this.get('closed'));
      }
    }
  });
});