const spinalCase = (str) =>
  str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();

export default spinalCase;
