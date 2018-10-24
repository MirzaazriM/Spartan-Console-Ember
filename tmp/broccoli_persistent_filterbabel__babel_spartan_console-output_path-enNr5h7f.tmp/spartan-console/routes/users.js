define('spartan-console/routes/users', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    ajax: Ember.inject.service(),

    // return dummy data
    model() {

      var data = [{
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxBwAg0NugCpITcIRuOUfGpX8JkSgEwQD0I54R3eu4QqgCB3I",
        "name": "Mel Gibson",
        "location": "USA"
      }, {
        "thumbnail": "https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg",
        "name": "Angela Merkel",
        "location": "Germany"
      }, {
        "thumbnail": "http://img2.thejournal.ie/inline/2470754/original?width=428&version=2470754",
        "name": "Grigor Dimitrov",
        "location": "Bulgaria"
      }, {
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVobmPg_hbA2tK9kzLwPXnJxaQ-yBpYsbLtAWBz9fygoP8HfnI",
        "name": "Zulfo Muhovic",
        "location": "Bosnia"
      }];

      return data;
    }

  });
});