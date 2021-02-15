function removeFalsyValues(array) {
  const newArray = [];
  for (const value of array) {
    if (value) newArray.push(value);
  }
  return newArray;
}

export { removeFalsyValues };
