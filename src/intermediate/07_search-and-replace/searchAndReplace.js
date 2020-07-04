const replace = (str, before, after) => {
  const index = str.indexOf(before);
  const letter = str[index];
  const isUpper = letter === letter.toUpperCase();

  return str.replace(
    before,
    isUpper ? after[0].toUpperCase() + after.slice(1) : after
  );
};

replace('Let us go to the store', 'store', 'mall');

export default replace;
