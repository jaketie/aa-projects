class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = () => `Hi, my name is ${this.name}`;

  visit = otherPerson => `${this.name} visited ${otherPerson.name}`;

  switchVisit = otherPerson => otherPerson.visit(this);

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError('argument must be an object');
    } else if (obj.name === undefined || obj.age === undefined) {
      throw new TypeError('object must have name and age values');
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate = obj => {
    try {
      this.update(obj);
    } catch(error) {
      return false;
    }
    return true;
  }

  static greetAll = obj => obj.map(person => person.sayHello());

}

module.exports = Person;
