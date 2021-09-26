import assert from 'assert';
import app from '../../src/app';

describe('\'orientadores\' service', () => {
  it('registered the service', () => {
    const service = app.service('orientadores');

    assert.ok(service, 'Registered the service');
  });
});
