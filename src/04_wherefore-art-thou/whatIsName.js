const whatIsName = (collection, source) =>
  collection.filter((obj) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );

export default whatIsName;
