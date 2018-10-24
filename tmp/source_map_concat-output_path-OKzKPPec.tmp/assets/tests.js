'use strict';

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
define('spartan-console/tests/components/ember-ace', ['exports', 'ember-ace/test-support/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
    }
  });
});
define('spartan-console/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('spartan-console/tests/integration/components/add-app-tab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-app-tab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5uHWjX6+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-app-tab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "lX4O0t+V",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-app-tab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/add-edit-apps-tab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-edit-apps-tab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vq363M2T",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-edit-apps-tab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QEtYxb8U",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-edit-apps-tab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/add-edit-plans-tab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-edit-plans-tab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LWFaVWxM",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-edit-plans-tab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kL+9QzYe",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-edit-plans-tab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/add-edit-tab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-edit-tab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kr1K1QeS",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-edit-tab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Kdz/h8TL",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-edit-tab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/add-edit-tab-package-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-edit-tab-package-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Z36hbf8C",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-edit-tab-package-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AmBGcEYv",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-edit-tab-package-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/add-edit-workouts-tab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | add-edit-workouts-tab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wN7/kiNg",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"add-edit-workouts-tab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aHtW920W",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"add-edit-workouts-tab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/admin-dialog-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | admin-dialog-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "unVe4ljL",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"admin-dialog-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dyabWuwO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"admin-dialog-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/admin-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | admin-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YHYemGpM",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"admin-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "HlnauRnu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"admin-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/admin-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | admin-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "NoYsMdPK",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"admin-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "XElwQx6O",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"admin-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/app-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | app-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zmYzNka/",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"app-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/gJcOdLP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"app-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/confirmation-dialog-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | confirmation-dialog-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "82EVkwjl",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"confirmation-dialog-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+tWsNXAz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"confirmation-dialog-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/edit-package-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | edit-package', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CNfhU/9b",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"edit-package\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0MhoEObD",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"edit-package\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/edit-round-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | edit-round-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "FpcLic84",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"edit-round-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ewMoJoPs",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"edit-round-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/exercise-difficulty-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | exercise-difficulty-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "x2i66G1w",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"exercise-difficulty-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3kapASIj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"exercise-difficulty-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/exercise-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | exercise-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IqV4Wn8r",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"exercise-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "XJXRI6fq",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"exercise-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/exercise-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | exercise-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "alXmygZx",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"exercise-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "OnGsCIom",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"exercise-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/exercises-dialog-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | exercises-dialog-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jDd+oogx",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"exercises-dialog-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "STzH45R+",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"exercises-dialog-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/header-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | header-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DEUItbqv",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"header-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PjFJStuw",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/language-dialog-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | language-dialog-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4ciHFzg5",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"language-dialog-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zkz8rVN2",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"language-dialog-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/language-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | language-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "RpQQi63A",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"language-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "86Wdmsgb",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"language-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/language-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | language-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "z245i/od",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"language-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6/an8pAE",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"language-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/loader-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | loader-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kz4IjeRb",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"loader-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8fi2o7kB",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"loader-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/login-box-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | login-box-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EllnVPYw",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"login-box-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "A6p2nBbW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"login-box-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/menu-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | menu-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "y5U/xQVN",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"menu-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "T67Qn/B8",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"menu-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/monolog-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | monolog-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hwZz6U3t",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"monolog-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6+YzC+pK",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"monolog-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/monolog-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | monolog-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7OZsoC+1",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"monolog-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qzqcYqSZ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"monolog-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/notifications-dropdown-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | notifications-dropdown-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Q4r5AmSz",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"notifications-dropdown-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dppc8AAP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"notifications-dropdown-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/notifications-dropdown-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | notifications-dropdown-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wseTqasW",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"notifications-dropdown-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kCZ3CjEv",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"notifications-dropdown-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/nutritionplan-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | nutritionplan-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WmxFwmA+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nutritionplan-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uy3Y9V/r",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nutritionplan-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/package-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | package-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VIVdS1hH",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"package-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eKZF3loK",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"package-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/packages-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | packages-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "y1U4bHkn",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"packages-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Z4I6iqu/",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"packages-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/paper-fab-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | paper-fab-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4Wr9fg62",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"paper-fab-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "oJKwkrs8",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"paper-fab-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/plans-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | plans-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vDonTWtA",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"plans-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AToKVpbj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"plans-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/policy-body-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | policy-body-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2W4f1WiF",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"policy-body-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+lWefXlq",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"policy-body-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/policy-list-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | policy-list-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cuVNPeMM",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"policy-list-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "K62+qnw5",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"policy-list-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/progress-bar-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | progress-bar-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "73tdtmqG",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"progress-bar-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0VsnBT5r",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"progress-bar-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/published-button-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | published-button-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dh/m5fvI",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"published-button-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "106T3TcP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"published-button-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/recipe-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | recipe-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "v3YmZuv8",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"recipe-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "HBkS+yT+",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"recipe-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/recipes-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | recipes-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CzSAPmfO",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"recipes-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "B12hFaT9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"recipes-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/round-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | round-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ahw1sFqj",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"round-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/uMfV8Z2",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"round-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/search-input-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | search-input-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "riRHg3/3",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"search-input-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "S/EUJSl2",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"search-input-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/tag-dialog-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | tag-dialog-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uMGnuRuM",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"tag-dialog-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/jkgfs2+",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tag-dialog-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/tag-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | tag-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "82ExXVqk",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"tag-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EX000zW/",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tag-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/tags-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | tags-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tDahDPNY",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"tags-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MZNqzNhc",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tags-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/toast-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | toast-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0wNBpoNO",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"toast-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rKyhMbad",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"toast-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/type-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | type-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SR41UfE5",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"type-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yMkc54dk",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"type-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/upload-image-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | upload-image-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YeUhNwZS",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"upload-image-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "TgwlSrnu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"upload-image-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/upload-media-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | upload-media-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "10/WjOwm",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"upload-media-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "oCv+3Muc",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"upload-media-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/upload-muscle-image-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | upload-muscle-image-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "npn3FTIu",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"upload-muscle-image-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bpKFmHae",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"upload-muscle-image-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/user-dropdown-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user-dropdown-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AL3oy595",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user-dropdown-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yRDlYb+l",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user-dropdown-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/user-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6NFlyFfT",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "BS252fhY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/workout-behavior-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | workout-behavior-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kwumG+B1",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"workout-behavior-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "NbGhptfG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"workout-behavior-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/workout-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | workout-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "n7acckiZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"workout-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QEGqa3v0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"workout-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/workout-type-filter-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | workout-type-filter-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QDpwku8d",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"workout-type-filter-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xkyNznyc",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"workout-type-filter-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/workoutplan-item-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | workoutplan-item-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6Gb+CNIT",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"workoutplan-item-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mTyJ/TDO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"workoutplan-item-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/components/workouts-list-component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | workouts-list-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sRcKMqQ4",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"workouts-list-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LD45AAZP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"workouts-list-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('spartan-console/tests/integration/helpers/check-delete-button-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | check-delete-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7Xhma4bZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"check-delete-button\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/integration/helpers/color-item-state-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | color-item-state', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vCg5bMY5",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"color-item-state\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/integration/helpers/color-log-level-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | color-log-level', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YkxlRfag",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"color-log-level\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/integration/helpers/menu-item-title-decorator-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | menu-item-title-decorator', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "biXKSR8R",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"menu-item-title-decorator\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/integration/helpers/set-published-button-appearence-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | set-published-button-appearence', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "777P62Up",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"set-published-button-appearence\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/integration/helpers/set-published-button-text-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | set-published-button-text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rOvh1DvS",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"set-published-button-text\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('spartan-console/tests/test-helper', ['spartan-console/app', 'spartan-console/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('spartan-console/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/add-app-tab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-app-tab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/add-edit-apps-tab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-edit-apps-tab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/add-edit-plans-tab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-edit-plans-tab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/add-edit-tab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-edit-tab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/add-edit-tab-package-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-edit-tab-package-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/add-edit-workouts-tab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/add-edit-workouts-tab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/admin-dialog-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/admin-dialog-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/admin-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/admin-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/admin-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/admin-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/app-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/app-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/confirmation-dialog-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/confirmation-dialog-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/edit-package-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-package-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/edit-round-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-round-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/exercise-difficulty-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/exercise-difficulty-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/exercise-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/exercise-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/exercise-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/exercise-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/exercises-dialog-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/exercises-dialog-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/language-dialog-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/language-dialog-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/language-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/language-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/language-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/language-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/loader-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/loader-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/login-box-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-box-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/menu-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/menu-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/monolog-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/monolog-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/monolog-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/monolog-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/notifications-dropdown-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/notifications-dropdown-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/notifications-dropdown-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/notifications-dropdown-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/nutritionplan-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nutritionplan-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/package-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/package-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/packages-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/packages-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/paper-fab-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/paper-fab-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/plans-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/plans-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/policy-body-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/policy-body-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/policy-list-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/policy-list-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/progress-bar-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/progress-bar-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/published-button-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/published-button-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/recipe-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/recipe-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/recipes-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/recipes-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/round-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/round-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/search-input-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-input-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tag-dialog-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tag-dialog-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tag-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tag-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tags-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tags-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/toast-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/toast-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/type-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/type-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/upload-image-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/upload-image-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/upload-media-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/upload-media-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/upload-muscle-image-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/upload-muscle-image-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user-dropdown-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-dropdown-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/workout-behavior-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/workout-behavior-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/workout-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/workout-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/workout-type-filter-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/workout-type-filter-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/workoutplan-item-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/workoutplan-item-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/workouts-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/workouts-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/check-delete-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/check-delete-button-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/color-item-state-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/color-item-state-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/color-log-level-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/color-log-level-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/menu-item-title-decorator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/menu-item-title-decorator-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/set-published-button-appearence-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/set-published-button-appearence-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/set-published-button-text-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/set-published-button-text-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-exercise-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-exercise-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-nutrition-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-nutrition-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-package-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-package-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-policy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-policy-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-recipe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-workout-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-workout-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-workouts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-workouts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/admins-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/admins-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/apps-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/apps-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-exercise-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-exercise-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-nutrition-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-nutrition-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-package-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-package-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-policy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-policy-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-recipe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-workout-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-workout-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-workouts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-workouts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/exercises-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/exercises-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/languages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/languages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/monolog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/monolog-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/nutrition-plans-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/nutrition-plans-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/packages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/packages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/policies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/policies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/recipes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/recipes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/workout-plans-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/workout-plans-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/workouts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/workouts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-exercise-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-exercise-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-notification-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-notification-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-nutrition-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-nutrition-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-package-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-package-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-policy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-policy-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-recipe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-workout-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-workout-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-workouts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-workouts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admins-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admins-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/apps-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/apps-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-exercise-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-exercise-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-nutrition-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-nutrition-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-package-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-package-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-policy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-policy-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-recipe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-workout-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-workout-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-workout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-workout-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/exercises-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/exercises-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/languages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/languages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/loader-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/loader-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/loading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/loading-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/monolog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/monolog-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/notifications-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/notifications-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/nutrition-plans-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nutrition-plans-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/packages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/packages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/policies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/policies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/recipes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/recipes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/statistic-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/statistic-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/workout-plans-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/workout-plans-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/workouts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/workouts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/shared-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/shared-data-test.js should pass ESLint\n\n');
  });
});
define('spartan-console/tests/unit/controllers/add-app-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-app', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-app');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-exercise-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-exercise', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-exercise');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-nutrition-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-nutrition-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-nutrition-plan');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-package-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-package', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-package');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-policy-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-policy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-policy');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-recipe-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-recipe', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-recipe');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-workout-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-workout-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-workout-plan');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/add-workouts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-workouts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:add-workouts');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/admins-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | admins', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:admins');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/apps-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | apps', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:apps');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-app-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-app', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-app');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-exercise-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-exercise', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-exercise');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-nutrition-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-nutrition-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-nutrition-plan');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-package-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-package', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-package');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-policy-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-policy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-policy');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-recipe-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-recipe', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-recipe');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-workout-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-workout-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-workout-plan');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/edit-workouts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-workouts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-workouts');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/exercises-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | exercises', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:exercises');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/languages-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | languages', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:languages');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/monolog-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | monolog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:monolog');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/nutrition-plans-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | nutrition-plans', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:nutrition-plans');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/packages-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | packages', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:packages');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/policies-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | policies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:policies');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/recipes-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | recipes', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:recipes');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/tags-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | tags', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:tags');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/users-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | users', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:users');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/workout-plans-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | workout-plans', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:workout-plans');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/controllers/workouts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | workouts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:workouts');
      assert.ok(controller);
    });
  });
});
define('spartan-console/tests/unit/routes/add-app-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-app', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-app');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-exercise-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-exercise', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-exercise');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-notification-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-notification', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-notification');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-nutrition-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-nutrition-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-nutrition-plan');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-package-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-package', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-package');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-policy-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-policy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-policy');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-recipe-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-recipe', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-recipe');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-workout-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-workout-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-workout-plan');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/add-workouts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-workouts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-workouts');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/admins-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | admins', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:admins');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/apps-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | apps', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:apps');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-app-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-app', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-app');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-exercise-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-exercise', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-exercise');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-nutrition-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-nutrition-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-nutrition-plan');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-package-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-package', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-package');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-policy-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-policy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-policy');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-recipe-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-recipe', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-recipe');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-workout-plan-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-workout-plan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-workout-plan');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/edit-workout-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-workout', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-workout');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/exercises-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | exercises', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:exercises');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/languages-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | languages', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:languages');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/loader-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | loader', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:loader');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/loading-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | loading', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:loading');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/monolog-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | monolog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:monolog');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/notifications-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | notifications', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:notifications');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/nutrition-plans-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | nutrition-plans', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:nutrition-plans');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/packages-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | packages', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:packages');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/policies-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | policies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:policies');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/recipes-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | recipes', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:recipes');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/statistic-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | statistic', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:statistic');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/tags-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | tags', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:tags');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/users-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | users', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:users');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/workout-plans-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | workout-plans', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:workout-plans');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/routes/workouts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | workouts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:workouts');
      assert.ok(route);
    });
  });
});
define('spartan-console/tests/unit/services/shared-data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | shared-data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shared-data');
      assert.ok(service);
    });
  });
});
define('spartan-console/config/environment', [], function() {
  var prefix = 'spartan-console';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('spartan-console/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
