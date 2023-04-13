// Define the function to create and display an array
function array_Function() {
    // Create an array
    const myArray = ["carrot", "broccoli", "tomato", "cabbage", "bell pepper"];
  
    // Access the HTML element with id 'output'
    const outputElement = document.getElementById("Array");
  
    // Set the innerHTML of the outputElement to the array values
    outputElement.innerHTML = "Array Values: " + myArray.join(", ");
  }  
  
  