const destroyer = (arr, ...args) => arr.filter((i) => !args.includes(i));

export default destroyer;
