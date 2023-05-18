// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null);
  sum(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(error.name + ': ' + error.message);
  }
}

// 2.
// tests
// sayName("Alex");
// sayName(1);
// Your code here
const sayName = name => {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw TypeError(`Invalid name! Must be a string!`)
  }
}

try {
  sayName(1);
} catch(error) {
    console.error(error.name + ': ' + error.message);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch(error) {
  console.log("Hello World!");
}
