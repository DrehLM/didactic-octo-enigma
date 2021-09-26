import assert from 'assert';
import app from '../../src/app';

describe('\'autores\' service', () => {
  it('registered the service', () => {
    const service = app.service('autores');

    assert.ok(service, 'Registered the service');
  });
});
