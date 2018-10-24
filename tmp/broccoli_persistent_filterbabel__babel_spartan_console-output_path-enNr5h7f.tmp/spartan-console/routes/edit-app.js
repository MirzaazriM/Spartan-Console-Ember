define('spartan-console/routes/edit-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({ // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');
      var app = sessionStorage.getItem("app");

      var tagsData = this.get('ajax').request("/tags?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var nutritionPlans = this.get('ajax').request("/nutritionplans?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var workoutPlans = this.get('ajax').request("/workoutplans?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var exercises = this.get('ajax').request("/exercises?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var packageList = this.get('ajax').request("/packages/list?from=0&limit=1000", { method: 'GET' });

      var appPackages = this.get('ajax').request('/apps?id=' + id, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        nutplans: nutritionPlans,
        worplans: workoutPlans,
        exercises: exercises,
        packagesList: packageList,
        packages: appPackages
      });
    }

  });
});