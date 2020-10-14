const { default: depth } = require('./nestingDepth');

describe('nestingDepth', () => {
  it('should return correct nesting depth', () => {
    expect(depth('(1+(2*3)+((8)/4))+1')).toBe(3);
  });
});
