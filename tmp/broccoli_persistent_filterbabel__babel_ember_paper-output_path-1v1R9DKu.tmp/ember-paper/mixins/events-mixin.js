define('ember-paper/mixins/events-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    touchStart(e) {
      return this.down(e);
    },
    mouseDown(e) {
      this.down(e);
    },
    touchEnd(e) {
      return this.up(e);
    },
    mouseUp(e) {
      return this.up(e);
    },
    touchCancel(e) {
      return this.up(e);
    },
    mouseLeave(e) {
      return this.up(e);
    },
    up() {},
    down() {},
    contextMenu() {},

    /*
     * Move events
     */

    mouseMove(e) {
      return this.move(e);
    },

    touchMove(e) {
      return this.move(e);
    },

    pointerMove(e) {
      return this.move(e);
    },

    move() {}
  });
});