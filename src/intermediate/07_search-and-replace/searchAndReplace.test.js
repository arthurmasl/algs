const { default: replace } = require('./searchAndReplace');

describe('search and replace', () => {
  test('should return "Let us go to the mall"', () => {
    expect(replace('Let us go to the store', 'store', 'mall')).toBe(
      'Let us go to the mall'
    );
  });

  test('should return "He is Sitting on the couch"', () => {
    expect(replace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe(
      'He is Sitting on the couch'
    );
  });
});
