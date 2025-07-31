// 1. Simple Math Operations
console.log("Simple Math Operations");
let num1 = 20;
let num2 = 5;

console.log("Addition " + (num1 + num2));
console.log("Subtraction " + (num1 - num2));
console.log("Multiplication " + num1 * num2);
console.log("Division " + num1 / num2);
//-----------------------------------------------------------------------------
console.log("--------------------------------------------------------");

// 2. Modulus & Increment/Decrement
console.log("Modulus & Increment/Decrement");
console.log("Modulus (num1 % num2) " + (num1 % num2));

let x = 10;
console.log("Original x " + x);
console.log("Pre_increment (++x) " + ++x);
console.log("Post_increment (x++) " + x++);
console.log("After post_increment " + x);

//-----------------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 3. Operator Precedence
console.log("Operator Precedence");
let Precedence1 = 5 + 2 * 3;
let Precedence2 = (5 + 2) * 3;
let Precedence3 = 10 - 3 + 2 * (4 - 1);

console.log("Expression 1 (5 + 2 * 3): " + Precedence1);
console.log("Expression 2 ((5 + 2) * 3): " + Precedence2);
console.log("Expression 3 (10 - 3 + 2 * (4 - 1)): " + Precedence3);

//-----------------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 4. Prompt for Age and if/else
console.log("Prompt for Age and if/else");
let age = prompt("Enter your age:");
age = parseInt(age);

if (age < 13) {
  alert("You are a child");
} else if (age >= 13 && age < 20) {
  alert("You are a teenager");
} else if (age >= 20 && age < 60) {
  alert("You are an adult");
} else {
  alert("You are a senior citizen");
}

//-----------------------------------------------------------------------------
// 5. Nested Conditions: Temperature Check
console.log("Nested Conditions: Temperature Check");
let temperature = prompt("Enter current temperature");
temperature = parseInt(temperature);

if (temperature < 0) {
  console.log("Freezing");
} else if (temperature < 10) {
  console.log("Too cold");
} else if (temperature >= 10 && temperature <= 25) {
  console.log("Just right");
} else {
  console.log("Too hot");
}
console.log("--------------------------------------------------------");
//-----------------------------------------------------------------------------
