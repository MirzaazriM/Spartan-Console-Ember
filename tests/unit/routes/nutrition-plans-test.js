import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nutrition-plans', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nutrition-plans');
    assert.ok(route);
  });
});
