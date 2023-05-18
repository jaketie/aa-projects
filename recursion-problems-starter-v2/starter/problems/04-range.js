/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
const range = (start, end) => {
  const rangeArr = [start];
  if (start > end) {
    return [];
  } else if (start === end-1) {
    return rangeArr;
  }
  return rangeArr.concat(range(start+1, end));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
