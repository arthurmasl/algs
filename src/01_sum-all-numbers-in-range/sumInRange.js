const sumInRange = ([n1, n2]) => ((n1 + n2) * (Math.abs(n1 - n2) + 1)) / 2;

const inRange = ([n1, n2]) => {
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);

  const result = [];

  for (let i = min; i <= max; i++) {
    n1 < n2 ? result.push(i) : result.unshift(i);
  }

  return result;
};

export { sumInRange, inRange };
