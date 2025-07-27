// ✴️ JavaScript Syntax Drills
// These are practice prompts to rebuild your confidence writing JavaScript

// ✅ 1. Declare variables using let, const, and var
let name = "Dez";
const age = 30;
var isStudent = true;

// ✅ 2. Write a function that adds two numbers
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3)); // Output: 8

// ✅ 3. Arrow function version
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(4, 2)); // Output: 8

// ✅ 4. If/else example
function checkAge(age) {
  if (age >= 18) {
    console.log("You're an adult.");
  } else {
    console.log("You're a minor.");
  }
}
checkAge(age);

// ✅ 5. Loop through an array
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}

// ✅ 6. Array method (forEach)
colors.forEach(color => console.log("forEach:", color));

// ✅ 7. Object and accessing values
const user = {
  username: "dezcode",
  email: "dez@example.com",
};
console.log("Username:", user.username);

// ✅ 8. Write a switch statement
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    default:
      return "Unknown";
  }
}
console.log("Day 2 is", getDayName(2));

// ✅ 9. Ternary operator
const loggedIn = true;
const message = loggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// ✅ 10. Create and use a class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Rex");
dog.speak(); // Output: Rex makes a sound
