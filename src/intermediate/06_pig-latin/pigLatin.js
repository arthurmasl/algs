const pigLatin = (str) =>
  str.replace(/^[aeiou]\w*/, '$&way').replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');

export default pigLatin;
