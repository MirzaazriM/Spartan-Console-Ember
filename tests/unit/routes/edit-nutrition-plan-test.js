import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | edit-nutrition-plan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:edit-nutrition-plan');
    assert.ok(route);
  });
});
