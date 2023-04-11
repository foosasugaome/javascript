// alert('Hello, world!');
// window.alert('Hello, world!');
// document.write('Hello, world!');

// var A =  'This is a string.';
// document.write(A);
// window.alert(A);

// document.write("Lisa  told Bart,  \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.");

// var myString = 'I\'m learning JavaScript and it\'s \"awesome\"!';
// document.write(myString)

// var firstName = "John";
// var lastName = "Doe";

// document.write("Hello, my name is " + firstName + " " + lastName + ".");

// var firstName = "John", lastName = "Doe", age = 25, country = "Canada";

// document.write("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");

// var x = 5;
// var y = 10;
// var z = x + y * 2;

// document.write(z);


// This is a simple JavaScript function that calculates the area of a rectangle
// The function takes two parameters: width and height
// It returns the calculated area

function calculateRectangleArea(width, height) {
    // Check if either width or height is not a positive number
    // If so, return an error message
    if (width <= 0 || height <= 0) {
      return "Error: Width and height must be positive numbers!";
    }
  
    // Calculate the area by multiplying width and height
    var area = width * height;
  
    // Return the calculated area
    return area;
  }
  
  // Example usage of the function with different width and height values
  var rectangle1 = calculateRectangleArea(5, 10);
  var rectangle2 = calculateRectangleArea(3, 7);
  
  // Display the results
  document.write("Area of Rectangle 1: " + rectangle1 + "<br />");
  document.write("Area of Rectangle 2: " + rectangle2);
  

