// Your code here
const Dragon = require("./dragon");

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
    hasLifeGoals() {
        let name = this.name;
        let goals = this.lifeGoals;
        goals.forEach(function (goal) {
            console.log(`${name} likes to ${goal}`);
        })
    }
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}

const spyro = new FriendlyDragon(
    "Spyro",
    "purple",
    [
        "glide through the air",
        "crack wise",
        "collect gems"
    ],
    "Cynder"
);

console.log(spyro);
spyro.hasLifeGoals();
console.log(spyro.helpsPeople());

module.exports = FriendlyDragon;
