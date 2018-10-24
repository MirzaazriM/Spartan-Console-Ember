define('spartan-console/routes/tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags/list?from=0&limit=1000', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData
      });
    }
  });
});