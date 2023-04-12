function Ride_Function () {
  var Height, Can_ride
  Height = document.getElementById('Height').ariaValueMax
  Can_ride = Height < 52 ? 'You are too short' : 'You are tall enough.'
  document.getElementById('Ride').innerHTML = Can_ride + ' to ride.'
}

function checkAge () {
  var age = document.getElementById('ageInput').value // Get user's input age from the input field
  var resultElement = document.getElementById('result') // Get result element to display the output

  // Use ternary operator to check if the age is greater than or equal to 18
  // If true, display "You can vote!", else display "You are not old enough to vote"
  var result = age >= 18 ? 'You can vote!' : 'You are not old enough to vote'

  resultElement.innerHTML = result // Display the result in the result element
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year =  Year;
    this.Vehicle_Color = Color;
}

var Norman = new Vehicle("Subaru", "CrossTrek", 2016, "Dark Grey");

function keywordFunction() {
    document.getElementById("New_and_This").innerHTML = "Norman owns a " + Norman.Vehicle_Year + " " + Norman.Vehicle_Make + " " + Norman.Vehicle_Model
}

//---------------------------------------------------------------
// Nested  functions

function outerFunction() {
    var x = 10; // Outer function variable
  
    // Nested function
    function innerFunction() {
      var y = 5; // Inner function variable
      var result = x + y;
      document.getElementById("Nested_Function").innerHTML = "Result: " + result;
    }
  
    innerFunction(); // Call the nested function
  }