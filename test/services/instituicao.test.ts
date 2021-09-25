import assert from 'assert';
import app from '../../src/app';

describe('\'instituicao\' service', () => {
  it('registered the service', () => {
    const service = app.service('instituicao');

    assert.ok(service, 'Registered the service');
  });
});
