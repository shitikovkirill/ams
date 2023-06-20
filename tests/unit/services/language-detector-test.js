import { module, test } from 'qunit';
import { setupTest } from 'ams/tests/helpers';

module('Unit | Service | language-detector', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:language-detector');
    assert.ok(service);
  });
});
