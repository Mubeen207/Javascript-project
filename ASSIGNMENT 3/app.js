// 1. Using Arrays
console.log("Using Arrays");
let fruits = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
console.log("Arry using loop");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//-----------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 2. Modifying Arrays
console.log("Modifying Arrays");
fruits.push("Pineapple", "Strawberry");
fruits.splice(1, 1);
console.log("Final array after adding 2 and removed 1", fruits);
// console.log(fruits);

//-----------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 3. Insert, Remove, Slice
console.log("Insert, Remove, Slice");
fruits.splice(2, 0, "Peach");
fruits.splice(3, 1);
let slicedFruits = fruits.slice(0, 3);
console.log("After splice and slice ");
console.log("Array after inserting at index 2 ", fruits);
console.log("Slice (first 3 fruits) ", slicedFruits);

//-----------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 4. Loop Control
console.log("Loop Control");
let numbers = [10, 20, 35, 45, 60, 70];
let found = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    found = true;
    console.log("Number greater than 50 found:", numbers[i]);
    break;
}
}
if (found) {
} else {
    console.log("No number greater than 50 not found.");
}

//-----------------------------------------------------------------------
console.log("--------------------------------------------------------");
// 5. Nested Loops - Multiplication Table (1 to 10)
console.log("Nested Loops - Multiplication Table (1 to 10)");
for (let i = 1; i <= 10; i++) {
  table_print = "";
  for (let j = 1; j <= 10; j++) {
    table_print = i + " X " + j + " = " + i * j;
    console.log(table_print);
}
}
//-----------------------------------------------------------------------
console.log("--------------------------------------------------------");
