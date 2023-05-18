const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName);
    this.items.push(item);
  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName);
    console.log(this.items);
    this.items.splice(item);
    this.currentRoom.items.push(item);
    console.log(this.currentRoom.items);
  }

  eatItem(itemName) {
    let isEdible;
    this.items.forEach((item, i) => {
      if (item.name === itemName && item instanceof Food) {
        isEdible = this.items.splice(i, 1)[0];
      }
    });
    if (isEdible) console.log(`You eat the ${itemName}`);
    else console.log(`${itemName} is not edible!`);
  }

  getItemByName(name) {
    const item = this.items.filter(item => item.name === name);
    if (item.length) {
      return item[0];
    } else {
      console.log(`${item} could not be found in your inventory`);
    }
  }

  hit(name) {
    let target = this.currentRoom.getEnemyByName(name);
    target.applyDamage(this.strength);
    console.log(`You attack ${target} for ${this.strength} damage`);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
