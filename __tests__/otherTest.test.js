const { expect, xit } = require('@jest/globals');

describe('otherTest', () => {
  it('runs a passing test', () => {
    expect(2).toBe(2);
  });

  it('runs another passing test', () => {
    expect('foo').toBe('foo');
  });
});
