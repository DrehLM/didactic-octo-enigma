import assert from 'assert';
import app from '../../src/app';

describe('\'edicoes-trilhas\' service', () => {
  it('registered the service', () => {
    const service = app.service('edicoes-trilhas');

    assert.ok(service, 'Registered the service');
  });
});
