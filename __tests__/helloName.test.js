const { it, expect } = require('@jest/globals');
const { helloName } = require('../problems/helloName');

describe('helloName', () => {
  it('uses the name in a greeting', () => {
    expect(helloName('bob')).toBe('Hello, bob');
  });

  it('uses the name', () => {
    expect(helloName('joe')).toContain('joe');
  });
});
