const chai = require('chai');
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;
const myMap = require('../problems/my-map');

describe('myMap()', () => {

    let array;
    let check;
    const cb = el => el * 2;

    beforeEach(() => {
        array = [1, 2, 3];
        check = array.toString();
    });

    it('should not mutate the passed in array', () => {
        myMap(array, cb);
        expect(array.toString()).to.equal(check);
    });

    it('should not make use of the built-in Array.map function', () => {
        const spy = chai.spy.on(array, 'map');
        myMap(array, cb);
        expect(spy).to.not.have.been.called.once;
    });

    it('should call the callback function for each element in the array', () => {
        const spy = chai.spy(cb);
        const length = array.length;
        myMap(array, spy);
        expect(spy).to.have.been.called.at.least(length);
    });

});
