const { default: destroyer } = require('./seekAndDestroy');

describe('destroyer', () => {
  test('should return [1, 1]', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  });

  test('should return [1, 5, 1]', () => {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
  });

  test('should return [1]', () => {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
  });

  test('should return []', () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
  });
});
