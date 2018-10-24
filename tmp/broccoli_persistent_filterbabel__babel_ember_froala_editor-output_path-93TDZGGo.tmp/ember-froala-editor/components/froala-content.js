define('ember-froala-editor/components/froala-content', ['exports', 'ember-froala-editor/templates/components/froala-content'], function (exports, _froalaContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const FroalaContentComponent = Ember.Component.extend({
    layout: _froalaContent.default,
    classNames: ['fr-view']
  });

  FroalaContentComponent.reopenClass({
    positionalParams: ['content']
  });

  exports.default = FroalaContentComponent;
});