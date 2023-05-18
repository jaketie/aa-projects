const chai = require('chai');
const expect = chai.expect;
const { Triangle, Scalene, Isosceles } = require('../problems/triangle');

describe('Triangle', () => {

    let triangle;
    let badTriangle;

    beforeEach(() => {
        triangle = new Triangle(4,4,4);
        badTriangle = new Triangle(0,0,0);
    });

    afterEach(() => {
        triangle = null;
        badTriangle = null;
    });

    it(`should have side1, side2 and side 3 properties`, () => {
        expect(triangle).to.have.property('side1');
        expect(triangle).to.have.property('side2');
        expect(triangle).to.have.property('side3');
    });

    it(`should set each property properly during instantiation`, () => {
        expect(triangle.side1).to.eql(4);
        expect(triangle.side2).to.eql(4);
        expect(triangle.side3).to.eql(4);
    });


    describe('getPerimeter()', () => {
        it(`should return the sum of each side of the instance`, () => {
            expect(triangle.getPerimeter()).to.eql(12);
        });

    });

    describe('hasValidSideLengths()', () => {
        it(`should return a boolean indicating whether or not an instance is a valid triangle`, () => {
            expect(triangle.hasValidSideLengths()).to.eql(true);
            expect(badTriangle.hasValidSideLengths()).to.eql(false);
        });

    });

    describe('validate()', () => {
        it(`should add an isValid property to an instance`, () => {
            triangle.validate();
            badTriangle.validate();
            expect(triangle.isValid).to.eql(true);
            expect(badTriangle.isValid).to.eql(false);
        });

    });

    describe('getValidTriangles()', () => {
        it(`should accept any number of triangle instances and return all instances that are valid triangles`, () => {
            expect(Triangle.getValidTriangles(triangle, badTriangle)).to.eql([triangle]);
        });

    });

});

describe('Scalene', () => {

    beforeEach(() => {
        triangle = new Scalene(4,5,11);
        badTriangle = new Scalene(4,4,4);
    });

    it(`should inherit from the Triangle class`, () => {
        expect(triangle).to.have.property('side1');
        expect(triangle).to.have.property('side2');
        expect(triangle).to.have.property('side3');
        expect(triangle.getPerimeter()).to.eql(20);
        expect(triangle.hasValidSideLengths()).to.eql(true);
    });

    describe('isScalene()', () => {
        it(`should return a boolean indicating if the object is a valid scalene triangle`, () => {
            expect(triangle.isScalene()).to.eql(true);
            expect(badTriangle.isScalene()).to.eql(false);
        });

    });

    describe('validate()', () => {
        it(`should add an isValidScalene property to an instance`, () => {
            triangle.validate();
            badTriangle.validate();
            expect(triangle.isValidScalene).to.eql(true);
            expect(badTriangle.isValidScalene).to.eql(false);
        });

    });

});

describe('Isosceles', () => {

    beforeEach(() => {
        triangle = new Isosceles(4,4,4);
        badTriangle = new Isosceles(1,2,3);
    });

    it(`should inherit from the Triangle class`, () => {
        expect(triangle).to.have.property('side1');
        expect(triangle).to.have.property('side2');
        expect(triangle).to.have.property('side3');
        expect(triangle.getPerimeter()).to.eql(12);
        expect(triangle.hasValidSideLengths()).to.eql(true);
    });

    describe('isIsosceles()', () => {
        it(`should return a boolean indicating if the object is a valid isosceles triangle`, () => {
            expect(triangle.isIsosceles()).to.eql(true);
            expect(badTriangle.isIsosceles()).to.eql(false);
        });

    });

    describe('validate()', () => {
        it(`should add an isValidIsosceles property to an object`, () => {
            triangle.validate();
            badTriangle.validate();
            expect(triangle.isValidIsosceles).to.eql(true);
            expect(badTriangle.isValidIsosceles).to.eql(false);
        });

    });

});
