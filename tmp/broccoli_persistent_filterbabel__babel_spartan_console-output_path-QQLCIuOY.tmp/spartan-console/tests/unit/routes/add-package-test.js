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