define('spartan-console/components/menu-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    clickedItem: 'statistic',

    // on first load set current menu items and store current menu items indicator to the session storage
    init() {
      this._super(...arguments);

      var side = sessionStorage.getItem('currentMenuPage');

      if (side === 'first' || side === null) {
        this.set('menuItems', this.get('menuItemsFirstPage'));
        // set to session storage
        sessionStorage.setItem('currentMenuPage', 'first');
      } else {
        this.set('menuItems', this.get('menuItemsSecondPage'));
        // set to session storage
        sessionStorage.setItem('currentMenuPage', 'second');
      }
    },

    // this property will hold current menu items
    menuItems: Ember.computed(function () {
      return [];
    }),

    // set menu items values as computed property so that build of the project dont report an error
    menuItemsFirstPage: Ember.computed(function () {
      return [{
        "icon": "/assets/icons/baseline-timeline-24px.svg",
        "title": "statistic",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-apps-24px.svg",
        "title": "apps",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-library_add-24px.svg",
        "title": "packages",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-date_range-24px.svg",
        "title": "workout-plans",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-restaurant-24px.svg",
        "title": "nutrition-plans",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-fitness_center-24px.svg",
        "title": "workouts",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-accessibility-24px.svg",
        "title": "exercises",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-restaurant_menu-24px.svg",
        "title": "recipes",
        "link": true
      }, {
        "icon": "/assets/icons/pound.svg",
        "title": "tags",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-account_circle-24px.svg",
        "title": "users",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-bell-24px.svg",
        "title": "notifications",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-settings-24px.svg",
        "title": "settings",
        "link": false
      }];
    }),

    menuItemsSecondPage: Ember.computed(function () {
      return [{
        "icon": "/assets/icons/keyboard-backspace.svg",
        "title": "Back to menu",
        "link": false
      }, {
        "icon": "/assets/icons/account-supervisor-circle.svg",
        "title": "admins",
        "link": true
      }, {
        "icon": "/assets/icons/file-document-box-multiple.svg",
        "title": "policies",
        "link": true
      }, {
        "icon": "/assets/icons/bug.svg",
        "title": "monolog",
        "link": true
      }, {
        "icon": "/assets/icons/web.svg",
        "title": "languages",
        "link": true
      }];
    }),

    didRender() {
      this._super(...arguments);

      var page = sessionStorage.getItem('currentPage');

      if (document.getElementById(page) !== null) {
        document.getElementById(page).classList.add('activeItem');
      }
    },

    // component actions
    actions: {

      // set which side of menu to show
      toggleMenuSide() {

        var currentSide = sessionStorage.getItem('currentMenuPage');

        if (currentSide === 'first') {
          this.set('menuItems', this.get('menuItemsSecondPage'));
          sessionStorage.setItem('currentMenuPage', 'second');
        } else {
          this.set('menuItems', this.get('menuItemsFirstPage'));
          sessionStorage.setItem('currentMenuPage', 'first');
        }
      },

      setCurrentPage(page) {
        sessionStorage.setItem('currentPage', page);

        // hide menu and menu overlay
        if (document.body.clientWidth < 701) {
          document.getElementById('menuContainer').style = "display: none;";
          document.getElementById('menuOverlay').style = "display: none;";
        }

        // style selected menu item
        this.styleSelectedMenuItem(page);
      }

    },

    // outside actions
    styleSelectedMenuItem(page) {

      // set current menu items
      var items = this.get('menuItems');

      // loop through all menu items style one which is equal to the page and remove style from all the others
      for (var i = 0; i < items.length; i++) {
        if (items[i].title === page) {
          document.getElementById(items[i].title).classList.add('activeItem');
          document.getElementById(items[i].title).classList.remove('inactiveItem');

          this.set('clickedItem', page);
        } else {
          document.getElementById(items[i].title).classList.remove('activeItem');
          document.getElementById(items[i].title).classList.add('inactiveItem');
        }
      }
    }

  });
});