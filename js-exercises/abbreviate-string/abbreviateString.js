/* eslint-disable linebreak-style */
function abbreviateString(str) {
  const newStr = str.trim().split(' ');
  const lastStringIndex = newStr.length - 1;
  return `${newStr[0]} ${newStr[lastStringIndex].charAt(0).toUpperCase()}.`;
}
export { abbreviateString };
