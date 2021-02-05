const { helloName } = require('../problems/helloName');

describe('helloName', () => {
  it('runs a test', () => {
    expect(helloName('bob')).toBe('Hello, bob');
  });
});
