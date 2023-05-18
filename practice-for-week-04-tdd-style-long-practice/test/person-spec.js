const chai = require('chai');
const Person = require('../problems/person');
const expect = chai.expect;

describe('class Person', () => {

    let tucker;
    let remy;

    beforeEach(() => {
        tucker = new Person('Tucker', 2);
        remy = new Person('Remy', 1);

    });

    describe(`constructor`, () => {
        it(`should take a name and age input when instantiating`, () => {
            expect(tucker.name).to.exist;
            expect(tucker.age).to.exist;
        });

        it(`should properly set the name and age properties`, () => {
            expect(remy.name).to.eql('Remy');
            expect(remy.age).to.eql(1);
        });

    });

    describe('sayHello()', () => {
        it(`should return a string with the Person's name with a greeting message`, () => {
            expect(tucker.sayHello()).to.eql(`Hi, my name is Tucker`);
        });

    });

    describe('visit(otherPerson)', () => {
        it(`should return a string stating that this Person instance visited a passed in Person instance`, () => {
            expect(tucker.visit(remy)).to.eql(`Tucker visited Remy`);
        });

    });

    describe('switchVisit(otherPerson)', () => {
        it(`should invoke the visit function as the passed in instance with the current instance as an argument`, () => {
            expect(tucker.switchVisit(remy)).to.eql(`Remy visited Tucker`);
        });

    });

    describe('update(obj)', () => {
        context(`when passed a valid object as an argument`, () => {
            it(`should update the object's values to match the the passed in object's`, () => {
                let newestMember = new Person('Tim', 33);
                newestMember.update({ name: 'Sheila', age: 41 });
                expect(newestMember.name).to.eql('Sheila');
                expect(newestMember.age).to.eql(41);
            });

            it(`should throw an error if the object does not have a 'name' and 'age' value`, () => {
                expect(() => tucker.update({ nickname: 'tucky' })).to.throw(TypeError, 'object must have name and age values');
            });

        });

        context(`when passed an invalid object`, () => {
            it(`should throw a TypeError stating which type of object is required`, () => {
                expect(() => remy.update('rem', 3)).to.throw(TypeError, 'argument must be an object');
            });

        });

    });

    describe('tryUpdate(obj)', () => {
        context(`when update() is successfully invoked`, () => {
            it(`should return a boolean indicating that the update was successful`, () => {
                expect(tucker.tryUpdate({ name: 'tucky', age: 3})).to.eql(true);
                expect(tucker.name).to.eql('tucky');
                expect(tucker.age).to.eql(3);
            });

        });

        context(`when update() is not successfully invoked`, () => {
            it(`should return a boolean indicating that the update was unsuccessful`, () => {
                expect(remy.tryUpdate({ nickname: 'Rem' })).to.eql(false);
            });

        });

    });

    describe('greetAll(obj)', () => {
        it(`should take an array of Person instances and invoke the sayHello() instance method on each instance, storing the strings in an array and returning it`, () => {
            const peepArray = [tucker, remy];
            expect(Person.greetAll(peepArray)).to.eql(['Hi, my name is Tucker', 'Hi, my name is Remy'])
        });

    });

});
