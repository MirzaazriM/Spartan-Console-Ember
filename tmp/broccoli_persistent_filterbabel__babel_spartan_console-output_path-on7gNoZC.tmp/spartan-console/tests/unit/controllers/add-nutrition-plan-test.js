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