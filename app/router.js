import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('statistic');
  this.route('apps');
  this.route('add-app');
  this.route('edit-app');
  this.route('packages');
  this.route('add-package');
  this.route('edit-package');
  this.route('workout-plans');
  this.route('add-workout-plan');
  this.route('edit-workout-plan');
  this.route('nutrition-plans');
  this.route('add-nutrition-plan');
  this.route('edit-nutrition-plan');
  this.route('workouts');
  this.route('add-workouts');
  this.route('edit-workout');
  this.route('exercises');
  this.route('add-exercise');
  this.route('edit-exercise');
  this.route('recipes');
  this.route('add-recipe');
  this.route('edit-recipe');
  this.route('tags');
  this.route('notifications');
  this.route('users');
  this.route('languages');
  this.route('add-notification');
  this.route('monolog');
  this.route('policies');
  this.route('add-policy');
  this.route('admins');
  this.route('settings');
  this.route('loading');
  this.route('edit-policy');
});

export default Router;