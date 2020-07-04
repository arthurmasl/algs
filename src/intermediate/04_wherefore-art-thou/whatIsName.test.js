const { default: whatIsName } = require('./whatIsName');

describe('what is name', () => {
  test('first', () => {
    expect(
      whatIsName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1,
      })
    ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
  });
});
