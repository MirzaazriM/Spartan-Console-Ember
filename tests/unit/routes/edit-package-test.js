import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | edit-package', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:edit-package');
    assert.ok(route);
  });
});
