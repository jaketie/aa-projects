const { Employee } = require("./employee");

const johnwick = new Employee("John Wick", "Dog Lover");

let johnSaysHi = johnwick.sayName;
let johnUnleashed = johnSaysHi.bind(johnwick);

setTimeout(johnUnleashed, 2000);

let johnsJob = johnwick.sayOccupation;
let johnUnleashedPt2 = johnsJob.bind(johnwick);

setTimeout(johnUnleashedPt2, 3000);
