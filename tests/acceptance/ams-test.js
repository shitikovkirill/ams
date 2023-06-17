import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ams/tests/helpers';

module('Acceptance | ams', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /ams', async function (assert) {
    assert.strictEqual(currentURL(), '/ams');
    assert.dom('.swiper-container h2').hasText('WELCOME TO CANVAS');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });
});
