const { default: spinalCase } = require('./spinalTapCase');

describe('spinal case', () => {
  test('should return "this-is-spinal-tap"', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
  });

  test('should return "this-is-spinal-tap"', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
  });

  test('should return "the-andy-griffith-show"', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show');
  });
});
