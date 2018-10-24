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