function myMap(inputArray, callback) {
  let mapArr = [];
  for (i = 0; i < inputArray.length; i++) mapArr.push(callback(inputArray[i]));
  return mapArr;
};

// const myMap = (inputArray, callback) => {
//   mapArr = [];
//   return inputArray.map(num => mapArr.push(callback(num)));
// }

module.exports = myMap;
