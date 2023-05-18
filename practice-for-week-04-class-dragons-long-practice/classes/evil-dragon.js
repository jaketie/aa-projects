// Your code here
const Dragon = require("./dragon");

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }
    dontInviteThemOverForDinner() {
        let name = this.name;
        let evilDoings = this.evilDoings;
        evilDoings.forEach(function (deed) {
            console.log(`${name} will ${deed}`);
        });
    }
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

const trogdor = new EvilDragon (
    "Trogdor",
    "red",
    [
        "burninate the countryside",
        "burninate the peasants",
        "burninate all the peoples"
    ],
    "thatched-roof cottages"
);

console.log(trogdor);
trogdor.dontInviteThemOverForDinner();
console.log(trogdor.breathesFire());
console.log(trogdor.burnsNemesis());

module.exports = EvilDragon;
