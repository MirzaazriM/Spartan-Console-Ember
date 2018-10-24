define('spartan-console/helpers/menu-item-title-decorator', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.menuItemTitleDecorator = menuItemTitleDecorator;
  function menuItemTitleDecorator(item) {

    var title = item[0];

    title = title.replace('-', ' ');

    return title;
  }

  exports.default = Ember.Helper.helper(menuItemTitleDecorator);
});