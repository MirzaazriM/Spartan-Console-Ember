define('ember-paper/components/paper-toast-inner', ['exports', 'ember-paper/templates/components/paper-toast-inner', 'ember-css-transitions/mixins/transition-mixin', 'ember-invoke-action'], function (exports, _paperToastInner, _transitionMixin, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionMixin.default, {
    layout: _paperToastInner.default,
    tagName: 'md-toast',
    transitionName: 'ng',

    dragging: false,

    x: 0,

    attributeBindings: ['style'],

    classNameBindings: ['left:md-left:md-right', 'top:md-top:md-bottom', 'capsule:md-capsule', 'dragging:md-dragging'],

    style: Ember.computed('x', function () {
      return Ember.String.htmlSafe(`transform:translate(${this.get('x')}px, 0)`);
    }),

    setValueFromEvent(event) {
      this.set('x', event);
    },

    _setupHammer() {
      // Enable dragging the slider
      let containerManager = new Hammer.Manager(this.element, {
        dragLockToAxis: true,
        dragBlockHorizontal: true
      });
      let swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, threshold: 10 });
      let pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 10 });
      containerManager.add(swipe);
      containerManager.add(pan);
      containerManager.on('panstart', Ember.run.bind(this, this.dragStart)).on('panmove', Ember.run.bind(this, this.drag)).on('panend', Ember.run.bind(this, this.dragEnd)).on('swiperight swipeleft', Ember.run.bind(this, this.dragEnd));
      this._hammer = containerManager;
    },

    didInsertElement() {
      this._super(...arguments);
      if (this.get('swipeToClose')) {
        this._setupHammer();
      }
    },

    didUpdateAttrs() {
      this._super(...arguments);

      if (this.get('swipeToClose') && !this._hammer) {
        // if it is enabled and we didn't init hammer yet
        this._setupHammer();
      } else if (!this.get('swipeToClose') && this._hammer) {
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

    _teardownHammer() {
      this._hammer.destroy();
      delete this._hammer;
    },

    dragStart(event) {
      if (!this.get('swipeToClose')) {
        return;
      }

      this.set('active', true);
      this.set('dragging', true);
      this.element.focus();

      this.setValueFromEvent(event.center.x);
    },

    drag(event) {
      if (!this.get('swipeToClose') || !this.get('dragging')) {
        return;
      }

      this.setValueFromEvent(event.deltaX);
    },

    dragEnd() {
      if (!this.get('swipeToClose')) {
        return;
      }

      this.setProperties({
        active: false,
        dragging: false
      });

      (0, _emberInvokeAction.invokeAction)(this, 'onClose');
    }
  });
});