class Car {
	constructor(speed) {
		this.speed = speed;
	}
	drive = speed => this.speed = speed;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
