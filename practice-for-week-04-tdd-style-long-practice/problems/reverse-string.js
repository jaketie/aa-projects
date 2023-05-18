module.exports = function reverseString(string) {
  if (typeof string !== 'string') throw TypeError('must be a string');

  let revWord = '';
  for (let i = string.length-1; i >= 0; i--) {
    let char = string[i];
    revWord += char;
  }
  return revWord;
};
