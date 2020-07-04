const qsort = (arr) => {
  if (arr.length < 1) return arr;

  const [pivot, ...rest] = arr;
  let left = [],
    right = [];

  rest.forEach((item) => (pivot > item ? left.push(item) : right.push(item)));

  return [...qsort(left), pivot, ...qsort(right)];
};

export default qsort;
