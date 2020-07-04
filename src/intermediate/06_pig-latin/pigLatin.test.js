const { default: pigLatin } = require('./pigLatin');

describe('pig latin', () => {
  test('should return aliforniacay', () => {
    expect(pigLatin('california')).toBe('aliforniacay');
  });
});
