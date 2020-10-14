const depth = (str) =>
  str
    .match(/[\(\)]/g)
    .map((s) => (s === '(' ? 1 : -1))
    .reduce((a, c, i) => [...a, (a.length ? a[i - 1] : 0) + c], [])
    .reduce((a, c) => (a < c ? c : a));

export default depth;
