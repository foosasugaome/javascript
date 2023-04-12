function run() {
    var  x =  5;
    var  s  = 'Hello';

    document.write(typeof s); // typeof
    document.write(x + s) // coercion
}
function run_coercion() {
    var  x =  5;
    var  s  = 'Hello';    
    document.write(x + s) // coercion
}

// Display operators
function displayOperators() {
    var num1 = 5;       // Declare and initialize variable num1 with value 5
    var num2 = 10;      // Declare and initialize variable num2 with value 10
    var num3 = 5;       // Declare and initialize variable num3 with value 5
  
    var result1 = num1 == num2;  // Comparison using == operator, stores the result in result1
    var result2 = num1 === num3; // Comparison using === operator, stores the result in result2
    var result3 = num1 > num2;  // Comparison using > operator, stores the result in result3
    var result4 = num1 < num2;  // Comparison using < operator, stores the result in result4
    var result5 = num1 && num2; // Logical AND operation, stores the result in result5
    var result6 = num1 || num2; // Logical OR operation, stores the result in result6
    var result7 = !num1;        // Logical NOT operation, stores the result in result7
  
    document.write("num1 == num2: " + result1 + "<br>"); // Display result1 in the browser
    document.write("num1 === num3: " + result2 + "<br>"); // Display result2 in the browser
    document.write("num1 > num2: " + result3 + "<br>"); // Display result3 in the browser
    document.write("num1 < num2: " + result4 + "<br>"); // Display result4 in the browser
    document.write("num1 && num2: " + result5 + "<br>"); // Display result5 in the browser
    document.write("num1 || num2: " + result6 + "<br>"); // Display result6 in the browser
    document.write("!num1: " + result7 + "<br>"); // Display result7 in the browser
  }


// --------------------------------------------------------------------
// Infinity Assignment
// Function to display Infinity
function displayInfinity() {
    // Set the output element's innerHTML to Infinity
    var infinity = 1.7976931348623157E3085871248761
    document.getElementById("output").innerHTML = infinity;
  }
  
  // Function to display -Infinity
  function displayNegativeInfinity() {
    // Set the output element's innerHTML to -Infinity
    var infinity = -1.7976931348623157E3085687351687351687
    document.getElementById("output").innerHTML = infinity;
  }
  
// --------------------------------------------------------------------
// Boolen Logic Assignment
// Function to display true
function displayTrue() {
    // Perform a greater than comparison
    var result = 5 > 3;
    // Set the output element's innerHTML to the result
    document.getElementById("bool_output").innerHTML = result;
  }
  
  // Function to display false
  function displayFalse() {
    // Perform a lesser than comparison
    var result = 2 < 1;
    // Set the output element's innerHTML to the result
    document.getElementById("bool_output").innerHTML = result;
  }
  
// --------------------------------------------------------------------
// Perform a math operation and log the result
var num1 = 5;
var num2 = 3;
var sum = num1 + num2; // Addition
var difference = num1 - num2; // Subtraction
var product = num1 * num2; // Multiplication
var quotient = num1 / num2; // Division

// Log the results to the console
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// --------------------------------------------------------------------
// Boolean challenge
console.log(2 > 1) // Returns true

// --------------------------------------------------------------------
// Double Equal Signs Assignment

// Define two variables
var num1 = 5;
var num2 = "5";

// Use the equality operator to compare the values
var isEqual = num1 == num2;

// Log the result to the console
console.log(isEqual); // Will output true

// Triple Equal Signs Assignment
// Return true by matching data type and value
var num1 = 5;
var num2 = 5;
var isEqual1 = num1 === num2;
console.log(isEqual1); // Will output true

// Return false by writing different data type and different value
var num3 = 5;
var str1 = "5";
var isEqual2 = num3 === str1;
console.log(isEqual2); // Will output false

// Return false by writing different data type but same value for both
var num4 = 5;
var str2 = "5";
var isEqual3 = num4 === str2;
console.log(isEqual3); // Will output false

// Return false by writing same data type but different value for both
var num5 = 5;
var num6 = 10;
var isEqual4 = num5 === num6;
console.log(isEqual4); // Will output false

// --------------------------------------------------------------------
// And Operator Assignment
// Using the AND operator to display true and false
var num1 = 5;
var num2 = 10;
var num3 = 0;

var result1 = (num1 > 0) && (num2 < 20);
console.log(result1); // Will output true

var result2 = (num1 > 0) && (num3 > 0);
console.log(result2); // Will output false

// Using the OR operator to display true and false
var str1 = "hello";
var str2 = "";
var str3 = null;

var result3 = (str1.length > 0) || (str2.length > 0);
console.log(result3); // Will output true

var result4 = (str2.length > 0) || (str3 === null);
console.log(result4); // Will output false

// --------------------------------------------------------------------
// Not Operator Assignment
// Using the NOT operator to display true and false
var num1 = 5;
var num2 = 1;

var result1 = !(num1 === 0);
console.log('!('+ num1 + '\ === 0) : ' + result1); // Will output true

var result2 = !(num2 !== 0);
console.log('!(' + num2 + ' !== 0) : ' + result2); // Will output false

