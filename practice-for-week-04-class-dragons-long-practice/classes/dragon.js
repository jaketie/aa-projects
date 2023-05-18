// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    const dragonArray = [];
    console.log(dragons);
    dragons.forEach(function (dragon) {
      dragonArray.push(dragon.name);
    });
    return dragonArray;
  }
}

const spyro = new Dragon("Spyro", "purple");
const cynder = new Dragon("Cynder", "black");
console.log(Dragon.getDragons(spyro, cynder));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
