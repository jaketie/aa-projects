const returnsThree = () => 3;

const reciprocal = num => {
  if (num < 1 || num > 1000000) throw RangeError('num must be within 1 - 1,000,000, inclusive');
  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal
};
