import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-workout-plan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-workout-plan');
    assert.ok(route);
  });
});
