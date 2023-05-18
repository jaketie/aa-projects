const chai = require('chai');
const expect = chai.expect;
const numberFun = require('../problems/number-fun');
const returnsThree = numberFun.returnsThree;
const reciprocal = numberFun.reciprocal;

describe('returnsThree()', () => {
    it('should return the number 3', () => {
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal()', () => {
    context('when passed a valid argument', () => {
        it('should return the reciprocal of a given number', () => {
            expect(reciprocal(2)).to.eql(0.5);
        });

        it('should function properly when provided multiple arguments', () => {
            expect(reciprocal(2, 2, 'clara')).to.eql(0.5);
        });

    });

    context('when passed an invalid argument', () => {
        it('should throw a RangeError when passed an argument less than 1 or greater than 1,000,000', () => {
            expect(() => reciprocal(0)).to.throw(RangeError);
            expect(() => reciprocal(1000001)).to.throw(RangeError);
        });

    });
});
