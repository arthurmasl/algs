const { determ, cramer } = require('./textAndNudes');

describe('determ', () => {
  test('[[5, 3], [3, 1]] should be -4', () => {
    expect(
      determ([
        [5, 3],
        [3, 1],
      ])
    ).toBe(-4);
  });
});

describe('cramer', () => {
  test('x = 2 y = 3', () => {
    expect(cramer([5, 3, 19], [3, 1, 9])).toEqual({ x: 2, y: 3 });
  });
});

describe('text and nudes', () => {
  const { x, y } = cramer([5, 3, 19], [3, 1, 9]);

  test('19min', () => {
    expect(5 * x + 3 * y).toBe(19);
  });

  test('9min', () => {
    expect(3 * x + 1 * y).toBe(9);
  });

  test('1min', () => {
    expect(x + y).toBe(5);
  });
});

describe('tests', () => {
  const { x, y } = cramer([5, 3, 19], [3, 1, 9]);

  test('per 1 min', () =>
    console.log(`${x} text per minute, ${y} nudes per minute`));

  test('1 text and 1 nude', () =>
    console.log(`${x + y} minutes for 1 text and 1 nude`));
});
