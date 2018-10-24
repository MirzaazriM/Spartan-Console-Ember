define('spartan-console/components/notifications-dropdown-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    notifications: Ember.computed(function () {
      return [1, 2, 3];
    }),

    actions: {

      stopPropagation() {
        document.getElementById('notificationsDropdown').style = "display: none";
      }
    }
  });
});