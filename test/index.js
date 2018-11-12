import assert from 'assert';
import { asyncForEach, asyncMap, pick } from '../src/index';

describe('Instant Utils', () => {
  it('asyncForEach should exist', () => {
    assert.equal(typeof asyncForEach, 'function');
  });

  it('asyncMap should exist', () => {
    assert.equal(typeof asyncMap, 'function');
  });

  it('pick should exist', () => {
    assert.equal(typeof pick, 'function');
  });
});
