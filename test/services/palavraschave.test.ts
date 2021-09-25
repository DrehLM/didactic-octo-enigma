import assert from 'assert';
import app from '../../src/app';

describe('\'palavraschave\' service', () => {
  it('registered the service', () => {
    const service = app.service('palavraschave');

    assert.ok(service, 'Registered the service');
  });
});
