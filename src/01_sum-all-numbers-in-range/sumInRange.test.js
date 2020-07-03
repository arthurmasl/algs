const { sumInRange, inRange } = require('./sumInRange');

describe('sum in range', () => {
  test('should return a number', () => {
    expect(Boolean(sumInRange([1, 2]))).toBe(true);
  });

  test('should return 10', () => {
    expect(sumInRange([1, 4])).toBe(10);
  });

  test('should return 10', () => {
    expect(sumInRange([4, 1])).toBe(10);
  });

  test('should return 45', () => {
    expect(sumInRange([5, 10])).toBe(45);
  });

  test('should return 45', () => {
    expect(sumInRange([10, 5])).toBe(45);
  });
});

describe('in range', () => {
  test('should return [1..4]', () => {
    expect(inRange([1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return [4..1]', () => {
    expect(inRange([4, 1])).toEqual([4, 3, 2, 1]);
  });

  test('should return [-2..3]', () => {
    expect(inRange([-2, 3])).toEqual([-2, -1, 0, 1, 2, 3]);
  });
});
