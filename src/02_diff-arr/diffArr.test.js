const { default: diffArr } = require('./diffArr');

describe('diff arr', () => {
  test('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].', () => {
    expect(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
  });

  test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].', () => {
    expect(
      diffArr(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual(['pink wool']);
  });
});
