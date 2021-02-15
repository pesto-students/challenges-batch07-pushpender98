function sumFibs(num) {
  let firstVal = 1;
  let nextVal = 1;
  let oddNumberSum = 1;
  let temp;

  while (nextVal <= num) {
    if (nextVal % 2 !== 0) oddNumberSum += nextVal;
    temp = firstVal + nextVal;

    firstVal = nextVal;
    nextVal = temp;
  }
  return oddNumberSum;
}

function cacheFunction(fn) {
  const cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    }

    cache[n] = fn(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
