define('ember-composability-tools/index', ['exports', 'ember-composability-tools/mixins/child', 'ember-composability-tools/mixins/parent', 'ember-composability-tools/mixins/render-block'], function (exports, _child, _parent, _renderBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'ChildMixin', {
    enumerable: true,
    get: function () {
      return _child.default;
    }
  });
  Object.defineProperty(exports, 'ParentMixin', {
    enumerable: true,
    get: function () {
      return _parent.default;
    }
  });
  Object.defineProperty(exports, 'RenderBlockMixin', {
    enumerable: true,
    get: function () {
      return _renderBlock.default;
    }
  });
});