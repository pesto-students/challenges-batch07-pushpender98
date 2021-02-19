/* eslint-disable no-param-reassign */
function balancedBraces(str) {
  const stack = [];

  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

export { balancedBraces };
