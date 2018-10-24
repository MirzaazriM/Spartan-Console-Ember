define('spartan-console/routes/add-nutrition-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var recipesData = this.get('ajax').request('/recepies/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        recipes: recipesData
      });
    }

  });
});