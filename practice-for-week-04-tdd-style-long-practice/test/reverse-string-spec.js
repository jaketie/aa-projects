const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverseString()', () => {

    it('should return a reversed version of input string', () => {
        expect(reverseString('fun')).to.equal('nuf');
    });

    it('throws an error if passed a non-string object', () => {
        expect(() => reverseString(42)).to.throw(TypeError, 'must be a string')
    });

});
