define('ember-paper/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/templates/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperVirtualRepeatScroller.default,
    classNames: ['md-virtual-repeat-scroller'],

    didInsertElement() {
      this._super(...arguments);
      this.$().scroll(e => {
        this.get('onScroll')(e);
      });
    },

    willDestroyElement() {
      this._super(...arguments);
      this.$().off('scroll');
    }
  });
});