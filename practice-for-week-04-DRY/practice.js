const isBigger = (num1, num2, flag) => {
  if (flag === 'small') {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return isBigger(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return isBigger(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${isBigger(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${isBigger(weight1, weight2, 'small')} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
