function changeColor(){
    const myElement = document.getElementById('paragraph')
    myElement.style.color =  'red';
}

changeColor()


// NaN Challenge
// Function to display NaN
function displayNaN() {
    // Set the output element's innerHTML to NaN
    document.getElementById("output").innerHTML = NaN;
  }
  
  // Function to display true
  function displayTrue() {
    // Use the isNaN() function to check if NaN is a number and set the output element's innerHTML
    document.getElementById("output").innerHTML = isNaN(NaN);
  }
  
  // Function to display false
  function displayFalse() {
    // Use the isNaN() function to check if 42 is a number and set the output element's innerHTML
    document.getElementById("output").innerHTML = isNaN(42);
  }
  
// ---------------------------------------------------------
// Reserved Keyword Challenge
  // Assign a reserved word to a variable
// var var = "ReservedWord"; // Here "var" is a reserved word and cannot be used as an identifier

// Attempt to display the variable in the browser
// console.log(var); // This will throw a syntax error as "var" is a reserved word

// Object constructor function
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Create an object using the constructor function
var person1 = new Person("John", 25, "Male");

// Access object properties
console.log(person1.name); // Output: "John"
console.log(person1.age); // Output: 25
console.log(person1.gender); // Output: "Male"
