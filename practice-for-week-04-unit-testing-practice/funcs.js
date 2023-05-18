const isFive = num => num === 5;

const isOdd = num => {
  if (typeof num !== 'number') {
    throw Error('must be a number');
  }
  return num % 2 !== 0;
}

function myRange(min, max, step = 1) {
  const array = [];
  if (min > max) array;

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
