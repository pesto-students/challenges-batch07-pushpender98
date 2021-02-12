/* eslint-disable linebreak-style */
function countChar(words) {
  const charCounts = {};
  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < words[i].length; j += 1) {
      const char = words[i][j];
      if (!charCounts[char]) {
        charCounts[char] = 0;
      }
      charCounts[char] += 1;
    }
  }
  return charCounts;
}

function duplicateLetters(...args) {
  const charCount = countChar([...args]);

  // find max count in the charCounts
  let count = 0;
  for (const charKey in charCount) {
    if (Object.prototype.hasOwnProperty.call(charCount, charKey)) {
      if (charCount[charKey] > count) {
        count = charCount[charKey];
      }
    }
  }

  if (count > 1) {
    return count;
  }
  return false;
}
export { duplicateLetters };
