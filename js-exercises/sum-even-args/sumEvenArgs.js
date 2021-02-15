const sumEvenArgs = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] % 2 === 0) sum += args[i];
  }

  return sum;
};

export { sumEvenArgs };
