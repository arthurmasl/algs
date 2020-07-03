const diffArr = (arr1, arr2) =>
  [...arr1, ...arr2].filter((i) => !arr1.includes(i) || !arr2.includes(i));

export default diffArr;
