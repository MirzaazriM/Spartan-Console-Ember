define('ember-paper/utils/get-parent', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getParent;

  const { ViewUtils } = Ember;

  // taken from https://github.com/kaliber5/ember-bootstrap/blob/master/addon/utils/get-parent.js
  function getParent(view) {
    if (Ember.get(view, 'tagName') === '') {
      // Beware: use of private API! :(
      if (ViewUtils && ViewUtils.getViewBounds) {
        return ViewUtils.getViewBounds(view).parentElement;
      } else {
        return view._renderNode.contextualElement;
      }
    } else {
      return Ember.get(view, 'element').parentNode;
    }
  }
});