define('ember-paper/components/paper-slider', ['exports', 'ember-paper/templates/components/paper-slider', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/utils/clamp', 'ember-invoke-action'], function (exports, _paperSlider, _focusableMixin, _colorMixin, _clamp, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_focusableMixin.default, _colorMixin.default, {
    layout: _paperSlider.default,
    tagName: 'md-slider',

    attributeBindings: ['min', 'max', 'step', 'discrete:md-discrete', 'tabindex'],

    classNames: ['md-default-theme'],
    classNameBindings: ['isMinimum:md-min', 'active:md-active', 'dragging:md-dragging'],

    constants: Ember.inject.service(),

    min: 0,
    max: 100,
    step: 1,
    tabindex: 0,

    activeTrackStyle: Ember.computed('percent', function () {
      let percent = this.get('percent') || 0;
      return Ember.String.htmlSafe(`width: ${percent * 100}%`);
    }),

    thumbContainerStyle: Ember.computed('percent', function () {
      let percent = this.get('percent') || 0;
      return Ember.String.htmlSafe(`left: ${percent * 100}%`);
    }),

    isMinimum: Ember.computed('percent', 'min', function () {
      return this.get('percent') === this.get('min');
    }),

    percent: Ember.computed('value', 'min', 'max', function () {
      let min = parseFloat(this.get('min'), 10);
      let max = parseFloat(this.get('max'), 10);

      return (0, _clamp.default)((this.get('value') - min) / (max - min), 0, 1);
    }),

    didInsertElement() {
      this._super(...arguments);
      if (!this.get('disabled')) {
        this._setupHammer();
      }
    },

    didUpdateAttrs() {
      this._super(...arguments);

      if (!this.get('disabled') && !this._hammer) {
        // if it is enabled and we didn't init hammer yet
        this._setupHammer();
      } else if (this.get('disabled') && this._hammer) {
        // if it is disabled and we did init hammer already
        this._teardownHammer();
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this._hammer) {
        this._teardownHammer();
      }
    },

    _setupHammer() {
      // Enable dragging the slider
      let containerManager = new Hammer.Manager(this.element);
      let pan = new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 });
      containerManager.add(pan);
      let tap = new Hammer.Tap();
      containerManager.add(tap);

      containerManager.on('panstart', Ember.run.bind(this, this.dragStart)).on('panmove', Ember.run.bind(this, this.drag)).on('panend', Ember.run.bind(this, this.dragEnd)).on('tap', Ember.run.bind(this, this.tap));

      this._hammer = containerManager;
    },

    _teardownHammer() {
      this._hammer.destroy();
      delete this._hammer;
    },

    positionToPercent(x) {
      let { left, width } = this.sliderDimensions();
      return Math.max(0, Math.min(1, (x - left) / width));
    },

    percentToValue(x) {
      let min = parseFloat(this.get('min'), 10);
      let max = parseFloat(this.get('max'), 10);
      return min + x * (max - min);
    },

    minMaxValidator(value) {
      let min = parseFloat(this.get('min'), 10);
      let max = parseFloat(this.get('max'), 10);
      return Math.max(min, Math.min(max, value));
    },

    stepValidator(value) {
      let step = parseFloat(this.get('step'), 10);
      return Math.round(value / step) * step;
    },

    active: false,
    dragging: false,
    enabled: Ember.computed.not('disabled'),

    sliderDimensions() {
      return this.element.querySelector('.md-track-container').getBoundingClientRect();
    },

    setValueFromEvent(value) {
      let exactVal = this.percentToValue(this.positionToPercent(value));
      let closestVal = this.minMaxValidator(this.stepValidator(exactVal));

      (0, _emberInvokeAction.invokeAction)(this, 'onChange', closestVal);
    },

    tap(event) {
      if (this.get('disabled')) {
        return;
      }

      this.setValueFromEvent(event.center.x);
    },

    dragStart(event) {
      if (this.get('disabled')) {
        return;
      }

      this.set('active', true);
      this.set('dragging', true);
      this.element.focus();

      this.setValueFromEvent(event.center.x);
    },

    drag(event) {
      if (this.get('disabled') || !this.get('dragging')) {
        return;
      }

      this.setValueFromEvent(event.center.x);
    },

    dragEnd() {
      if (this.get('disabled')) {
        return;
      }

      this.setProperties({
        active: false,
        dragging: false
      });
    },

    keyDown(event) {
      if (this.get('disabled')) {
        return;
      }

      let changeAmount, newValue;

      if (event.keyCode === this.get('constants.KEYCODE.LEFT_ARROW')) {
        changeAmount = parseFloat(this.get('step')) * -1;
      } else if (event.keyCode === this.get('constants.KEYCODE.RIGHT_ARROW')) {
        changeAmount = parseFloat(this.get('step'));
      }

      if (changeAmount) {
        if (event.metaKey || event.ctrlKey || event.altKey) {
          changeAmount *= 4;
        }

        newValue = this.get('value') + changeAmount;

        (0, _emberInvokeAction.invokeAction)(this, 'onChange', this.minMaxValidator(newValue));

        event.preventDefault();
        event.stopPropagation();
      }
    }

  });
});