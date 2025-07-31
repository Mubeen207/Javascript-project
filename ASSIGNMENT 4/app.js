// 1. Case Conversion and Length
console.log("Case Conversion and Length");
let fullName = prompt("Enter your full name:");
console.log("1. Full Name Length " + fullName.length);
console.log("Upper Case " + fullName.toUpperCase());
console.log("Lower Case " + fullName.toLowerCase());
console.log("-----------------------------------------------------");
//------------------------------------------------------------------
// 2. Finding Characters & Slicing First/Last Name
console.log("Finding Characters & Slicing First/Last Name");
let spaceIndex = fullName.indexOf(" ");
if (spaceIndex !== -1) {
  let firstName = fullName.slice(0, spaceIndex);
  let lastName = fullName.slice(spaceIndex + 1);
  console.log("First Name " + firstName);
  console.log("Last Name " + lastName);
} else {
  console.log("Only one name entered");
}

console.log("-----------------------------------------------------");
//------------------------------------------------------------------
// 3. Replacing Text
console.log("Replacing Text");
let setence = "This is a bad example That was a bad decision So bad!";
let updatedsentence = setence.replace(/bad/g, "good");
console.log("3. Replaced Text");
console.log("Before " + setence);
console.log("After " + updatedsentence);

console.log("-----------------------------------------------------");
//------------------------------------------------------------------
// 4. Random Number Generator (Dice)
console.log("Random Number Generator for Dice");

let Results = [];
let count = [0, 0, 0, 0, 0, 0]; 
for (let i = 0; i < 10; i++) {
  let roll = Math.floor(Math.random() * 6) + 1;
  Results.push(roll);
  count[roll - 1]++; 
}

console.log("Dice Results (10 rolls)", Results);
console.log("Frequency of Each Number");
for (let i = 0; i < 6; i++) {
  console.log((i + 1) + " is " + count[i] + " times");
}


console.log("-----------------------------------------------------");

//------------------------------------------------------------------
// 5. String to Number Conversion
console.log("String to Number Conversion");
let input = prompt("Enter a number (it can be decimal)");
let intNum = parseInt(input);
let floatNum = parseFloat(input);
console.log("As Integer x2 " + intNum * 2);
console.log("As Float x2 " + (floatNum * 2).toFixed(2));

console.log("-----------------------------------------------------");
//------------------------------------------------------------------
