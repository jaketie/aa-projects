const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.items = [];
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    const directions = Object.keys(this.currentRoom.exits);
    const random = Math.floor(directions.length * Math.random() << 0);
    this.currentRoom = this.currentRoom.getRoomInDirection(directions[random]);
    this.cooldown += 3000;
    this.act();
  }

  takeSandwich() {

  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  attack() {
    this.alert(`${this.name} attacks you for ${this.strength} damage`);
    this.attackTarget.applyDamage(this.strength);
    this.cooldown += 3000;
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    } else {
      this.attackTarget = this.player;
      this.act();
    }
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.cooldown === 0 && this.attackTarget === null){
      this.scratchNose();
      this.rest();
    } else {
      this.attack()
    }
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }

}

module.exports = {
  Enemy,
};
