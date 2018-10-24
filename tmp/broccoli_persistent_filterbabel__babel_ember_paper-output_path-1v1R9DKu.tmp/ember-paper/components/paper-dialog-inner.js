define('ember-paper/components/paper-dialog-inner', ['exports', 'ember-paper/mixins/translate3d-mixin'], function (exports, _translate3dMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_translate3dMixin.default, {
    tagName: 'md-dialog',
    classNames: ['md-default-theme'],
    classNameBindings: ['contentOverflow:md-content-overflow', 'fullscreen:md-dialog-fullscreen'],

    onTranslateFromEnd() {
      if (this.get('focusOnOpen')) {
        let toFocus = this.$('[autofocus]').last();
        if (toFocus.length === 0) {
          toFocus = this.$('md-dialog-actions button').last();
        }
        toFocus.focus();
      }
    },

    onTranslateToEnd($origin) {
      if ($origin) {
        $origin.focus();
      }
    },

    didInsertElement() {
      this._super(...arguments);
      this.checkContentOverflow();
      // content overflow might change depending on load of images inside dialog.
      let images = this.$().find('img');
      images.on(`load.${this.elementId}`, Ember.run.bind(this, this.checkContentOverflow));
    },

    willDestroyElement() {
      this._super(...arguments);
      let images = this.$().find('img');
      images.off(`load.${this.elementId}`);
    },

    checkContentOverflow() {
      let content = this.element.querySelector('md-dialog-content');
      if (content) {
        this.set('contentOverflow', content.scrollHeight > content.clientHeight);
      }
    }
  });
});