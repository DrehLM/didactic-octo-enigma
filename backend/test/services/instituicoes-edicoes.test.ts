import assert from 'assert';
import app from '../../src/app';

describe('\'instituicoes-edicoes\' service', () => {
  it('registered the service', () => {
    const service = app.service('instituicoes-edicoes');

    assert.ok(service, 'Registered the service');
  });
});
