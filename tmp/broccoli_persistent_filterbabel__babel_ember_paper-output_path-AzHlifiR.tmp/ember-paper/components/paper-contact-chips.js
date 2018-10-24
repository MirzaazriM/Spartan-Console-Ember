define('ember-paper/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-chips', 'ember-paper/templates/components/paper-contact-chips'], function (exports, _paperChips, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default.extend({
    layout: _paperContactChips.default,
    tagName: 'md-contact-chips',
    classNames: ['md-default-theme'],
    requireMatch: true,
    searchField: 'email',
    emailField: 'email',
    nameField: 'name',
    imageField: 'image'
  });
});