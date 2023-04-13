// Using let within a block scope
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  }
  
  printNumbers(); // Output: 1 2 3 4 5
  
  // Variable 'i' is not accessible outside the block scope
  console.log(i); // Throws an error: 'i' is not defined
  

  // Using let within a function scope
function greet() {
    let message = "Hello!";
    console.log(message);
  }
  
  greet(); // Output: Hello!
  
  // Variable 'message' is not accessible outside the function
  console.log(message); // Throws an error: 'message' is not defined
  

  // Using let with re-assignment
let age = 25;
console.log(age); // Output: 25

age = 30; // Re-assigning the value of 'age' variable
console.log(age); // Output: 30
