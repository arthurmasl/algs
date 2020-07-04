const { default: qsort } = require('./quickSort');

describe('quick sort', () => {
  test('should return a sorted array', () => {
    expect(qsort([5, 3, 2, -2, 9, 25, -25, 0])).toEqual([
      -25,
      -2,
      0,
      2,
      3,
      5,
      9,
      25,
    ]);
  });
});
