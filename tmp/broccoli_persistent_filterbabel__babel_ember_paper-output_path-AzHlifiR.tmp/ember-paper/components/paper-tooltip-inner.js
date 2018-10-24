define('ember-paper/components/paper-tooltip-inner', ['exports', 'ember-paper/templates/components/paper-tooltip-inner', 'ember-css-transitions/mixins/transition-mixin', 'ember-paper/utils/calculate-tooltip-position'], function (exports, _paperTooltipInner, _transitionMixin, _calculateTooltipPosition) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionMixin.default, {
    layout: _paperTooltipInner.default,
    tagName: 'md-tooltip',
    attributeBindings: ['style'],
    classNames: ['md-tooltip', 'md-panel'],
    classNameBindings: ['positionClass'],
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    transitionClassNameBindings: ['show:md-show', 'hide:md-hide'],
    show: Ember.computed.bool('style'),

    positionClass: Ember.computed('position', function () {
      return `md-origin-${this.get('position')}`;
    }),

    didInsertElement() {
      this._super(...arguments);
      Ember.run.schedule('afterRender', () => {
        if (!this.isDestroyed) {
          let anchorElement = this.get('anchorElement');
          let pos = (0, _calculateTooltipPosition.default)(this.element, anchorElement, this.get('position'));
          this.set('style', Ember.String.htmlSafe(`top: ${pos.top}px; left: ${pos.left}px`));
          this.set('hide', true);
          (0, _transitionMixin.nextTick)().then(_transitionMixin.nextTick).then(_transitionMixin.nextTick).then(_transitionMixin.nextTick).then(() => {
            if (!this.isDestroyed) {
              this.set('hide', false);
            }
          });
        }
      });
    }
  });
});