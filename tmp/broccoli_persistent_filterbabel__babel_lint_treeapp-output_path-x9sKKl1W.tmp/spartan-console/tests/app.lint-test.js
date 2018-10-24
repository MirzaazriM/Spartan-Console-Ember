define('spartan-console/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/add-app-tab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-app-tab-component.js should pass ESLint\n\n34:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/add-edit-apps-tab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-edit-apps-tab-component.js should pass ESLint\n\n34:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/add-edit-plans-tab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-edit-plans-tab-component.js should pass ESLint\n\n34:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/add-edit-tab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-edit-tab-component.js should pass ESLint\n\n34:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/add-edit-tab-package-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-edit-tab-package-component.js should pass ESLint\n\n34:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/add-edit-workouts-tab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-edit-workouts-tab-component.js should pass ESLint\n\n41:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/admin-dialog-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/admin-dialog-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/admin-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/admin-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/admin-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/admin-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/app-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/app-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/confirmation-dialog-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/confirmation-dialog-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/edit-round-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/edit-round-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/exercise-difficulty-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/exercise-difficulty-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/exercise-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/exercise-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/exercise-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/exercise-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/exercises-dialog-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/exercises-dialog-component.js should pass ESLint\n\n106:17 - \'i\' is already defined. (no-redeclare)\n149:39 - \'thumbnail\' is defined but never used. (no-unused-vars)\n150:9 - \'exerciseIn\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/header-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/language-dialog-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/language-dialog-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/language-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/language-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/language-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/language-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/loader-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/loader-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/login-box-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-box-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/menu-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/monolog-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/monolog-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/monolog-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/monolog-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/notifications-dropdown-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notifications-dropdown-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/nutritionplan-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nutritionplan-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/package-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/package-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/packages-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/packages-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/paper-fab-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/paper-fab-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/plans-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/plans-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/policy-body-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/policy-body-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/policy-list-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/policy-list-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/progress-bar-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/progress-bar-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/published-button-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/published-button-component.js should pass ESLint\n\n2:10 - \'observer\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/recipe-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/recipe-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/recipes-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/recipes-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/round-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/round-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/search-input-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search-input-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/tag-dialog-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tag-dialog-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/tag-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tag-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/tags-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/tags-list-component.js should pass ESLint\n\n97:13 - \'tagIn\' is already defined. (no-redeclare)\n99:13 - \'selectedTags\' is already defined. (no-redeclare)\n101:17 - \'i\' is already defined. (no-redeclare)\n112:15 - \'index\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/toast-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/toast-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/type-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/type-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/upload-image-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/upload-image-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/upload-media-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/upload-media-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/upload-muscle-image-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/upload-muscle-image-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/user-dropdown-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-dropdown-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/user-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/workout-behavior-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workout-behavior-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/workout-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workout-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/workout-type-filter-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workout-type-filter-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/workoutplan-item-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workoutplan-item-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/workouts-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workouts-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-app.js should pass ESLint\n\n2:10 - \'observer\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-exercise.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-exercise.js should pass ESLint\n\n155:21 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/add-nutrition-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-nutrition-plan.js should pass ESLint\n\n235:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-package.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-package.js should pass ESLint\n\n274:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-policy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-policy.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-recipe.js should pass ESLint\n\n2:10 - \'observer\' is defined but never used. (no-unused-vars)\n143:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-workout-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-workout-plan.js should pass ESLint\n\n227:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-workouts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-workouts.js should pass ESLint\n\n2:10 - \'observer\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/admins.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admins.js should pass ESLint\n\n5:3 - \'computed\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n3:3 - \'observer\' is defined but never used. (no-unused-vars)\n144:15 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/apps.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/apps.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-app.js should pass ESLint\n\n152:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-exercise.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-exercise.js should pass ESLint\n\n196:23 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/edit-nutrition-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-nutrition-plan.js should pass ESLint\n\n217:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-package.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-package.js should pass ESLint\n\n55:15 - \'i\' is already defined. (no-redeclare)\n257:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-policy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-policy.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-recipe.js should pass ESLint\n\n146:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-workout-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-workout-plan.js should pass ESLint\n\n225:14 - \'image\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-workout.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-workout.js should pass ESLint\n\n61:9 - \'roundsCounter\' is assigned a value but never used. (no-unused-vars)\n65:13 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/exercises.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/exercises.js should pass ESLint\n\n143:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/languages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/languages.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/monolog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/monolog.js should pass ESLint\n\n18:9 - \'filter\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/nutrition-plans.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/nutrition-plans.js should pass ESLint\n\n142:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/packages.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/packages.js should pass ESLint\n\n145:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/policies.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/policies.js should pass ESLint\n\n127:24 - \'data\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/recipes.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/recipes.js should pass ESLint\n\n145:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/tags.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/tags.js should pass ESLint\n\n80:9 - \'id\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/users.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/users.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/workout-plans.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/workout-plans.js should pass ESLint\n\n142:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/workouts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/workouts.js should pass ESLint\n\n145:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('helpers/check-delete-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/check-delete-button.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/color-item-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/color-item-state.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/color-log-level.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/color-log-level.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/menu-item-title-decorator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/menu-item-title-decorator.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/set-published-button-appearence.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/set-published-button-appearence.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/set-published-button-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/set-published-button-text.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-app.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-exercise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-exercise.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-notification.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-notification.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-nutrition-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-nutrition-plan.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-package.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-package.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-policy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-policy.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-workout-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-workout-plan.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-workouts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-workouts.js should pass ESLint\n\n');
  });

  QUnit.test('routes/admins.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admins.js should pass ESLint\n\n');
  });

  QUnit.test('routes/apps.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/apps.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/edit-app.js should pass ESLint\n\n14:9 - \'lang\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/edit-exercise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-exercise.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-nutrition-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-nutrition-plan.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-package.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-package.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-policy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-policy.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-workout-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-workout-plan.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-workout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-workout.js should pass ESLint\n\n');
  });

  QUnit.test('routes/exercises.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/exercises.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/languages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/languages.js should pass ESLint\n\n');
  });

  QUnit.test('routes/loading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/loading.js should pass ESLint\n\n');
  });

  QUnit.test('routes/monolog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/monolog.js should pass ESLint\n\n');
  });

  QUnit.test('routes/notifications.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/notifications.js should pass ESLint\n\n');
  });

  QUnit.test('routes/nutrition-plans.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/nutrition-plans.js should pass ESLint\n\n');
  });

  QUnit.test('routes/packages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/packages.js should pass ESLint\n\n');
  });

  QUnit.test('routes/policies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/policies.js should pass ESLint\n\n');
  });

  QUnit.test('routes/recipes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/recipes.js should pass ESLint\n\n');
  });

  QUnit.test('routes/statistic.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/statistic.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tags.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass ESLint\n\n');
  });

  QUnit.test('routes/workout-plans.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/workout-plans.js should pass ESLint\n\n');
  });

  QUnit.test('routes/workouts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/workouts.js should pass ESLint\n\n');
  });
});