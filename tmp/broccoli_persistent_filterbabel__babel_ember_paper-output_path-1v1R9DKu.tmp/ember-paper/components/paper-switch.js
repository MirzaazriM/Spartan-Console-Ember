define('ember-paper/components/paper-switch', ['exports', 'ember-paper/templates/components/paper-switch', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/proxiable-mixin', 'ember-invoke-action'], function (exports, _paperSwitch, _focusableMixin, _rippleMixin, _colorMixin, _proxiableMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _rippleMixin.default, _colorMixin.default, _proxiableMixin.default, {
    layout: _paperSwitch.default,
    tagName: 'md-switch',
    classNames: ['paper-switch', 'md-default-theme'],
    classNameBindings: ['value:md-checked', 'dragging:md-dragging'],
    toggle: true,
    constants: Ember.inject.service(),

    /* Ripple Overrides */
    rippleContainerSelector: '.md-thumb',
    center: true,
    dimBackground: false,
    fitRipple: true,

    value: false,
    disabled: false,
    dragging: false,

    thumbContainerStyle: Ember.computed('dragging', 'dragAmount', function () {
      if (!this.get('dragging')) {
        return Ember.String.htmlSafe('');
      }

      let translate = Math.max(0, Math.min(100, this.get('dragAmount') * 100));
      let transformProp = `translate3d(${translate}%, 0, 0)`;
      return Ember.String.htmlSafe(`transform: ${transformProp};-webkit-transform: ${transformProp}`);
    }),

    didInsertElement() {
      this._super(...arguments);

      // Only setup if the switch is not disabled
      if (!this.get('disabled')) {
        this._setupSwitch();
      }
    },

    init() {
      this._super(...arguments);
      (true && !(this.get('onChange') !== undefined) && Ember.assert('{{paper-switch}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined));
    },

    willDestroyElement() {
      this._super(...arguments);
      this._teardownSwitch();
    },

    didUpdateAttrs() {
      this._super(...arguments);

      if (!this.get('disabled') && !this._switchContainerHammer) {
        this._setupSwitch();
      } else if (!this.get('disabled') && this._switchContainerHammer) {
        this._switchContainerHammer.set({ enable: true });
      } else if (this.get('disabled') && this._switchContainerHammer) {
        this._switchContainerHammer.set({ enable: false });
      }
    },

    _setupSwitch() {
      this.set('switchWidth', this.$('.md-thumb-container').innerWidth());

      let switchContainer = this.$('.md-container').get(0);
      let switchHammer = new Hammer(switchContainer);
      this._switchContainerHammer = switchHammer;

      // Enable dragging the switch container
      switchHammer.get('pan').set({ threshold: 1 });
      switchHammer.on('panstart', Ember.run.bind(this, this._dragStart)).on('panmove', Ember.run.bind(this, this._drag)).on('panend', Ember.run.bind(this, this._dragEnd));

      // Enable tapping gesture on the switch
      this._switchHammer = new Hammer(this.element);
      this._switchHammer.on('tap', Ember.run.bind(this, this._dragEnd));
      this.$('.md-container').on('click', Ember.run.bind(this, this._handleNativeClick));
    },

    _handleNativeClick() {
      return Ember.get(this, 'bubbles');
    },

    _teardownSwitch() {
      if (this._switchContainerHammer) {
        this._switchContainerHammer.destroy();
        this._switchHammer.destroy();
      }
    },

    _dragStart() {
      this.set('dragAmount', +this.get('value'));
      this.set('dragging', true);
    },

    _drag(event) {
      if (!this.get('disabled')) {
        // Set the amount the switch has been dragged
        this.set('dragAmount', +this.get('value') + event.deltaX / this.get('switchWidth'));
      }
    },

    _dragEnd() {
      if (!this.get('disabled')) {
        let value = this.get('value');
        let dragAmount = this.get('dragAmount');

        if (!this.get('dragging') || value && dragAmount < 0.5 || !value && dragAmount > 0.5) {
          (0, _emberInvokeAction.invokeAction)(this, 'onChange', !value);
        }
        this.set('dragging', false);
        this.set('dragAmount', null);
      }
    },

    focusIn() {
      // Focusing in w/o being pressed should use the default behavior
      if (!this.get('pressed')) {
        this._super(...arguments);
      }
    },

    keyPress(ev) {
      if (ev.which === this.get('constants.KEYCODE.SPACE') || ev.which === this.get('constants.KEYCODE.ENTER')) {
        ev.preventDefault();
        this._dragEnd();
      }
    },

    processProxy() {
      (0, _emberInvokeAction.invokeAction)(this, 'onChange', !this.get('value'));
    }

  });
});