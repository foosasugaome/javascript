// Global variable
var globalVar = "I am a global variable";

// Function that uses the global variable
function useGlobalVar() {
  console.log(globalVar);
}

// Call the function that uses the global variable
useGlobalVar(); // Output: "I am a global variable"

// Function that uses a local variable
function useLocalVar() {
  var localVar = "I am a local variable"; // Local variable
  console.log(localVar);
}

// Call the function that uses the local variable
useLocalVar(); // Output: "I am a local variable"

// Attempt to access the local variable outside of its scope
// This will result in an error as localVar is not defined in this scope
console.log(localVar); // Throws an error: "Uncaught ReferenceError: localVar is not defined"


//  --------------------------------------------------
// Method & If Statement Assignment
function checkTime() {
    var currentTime = new Date().getHours(); // Get current hours using new Date().getHours() method
    var paragraphElement = document.getElementById("myParagraph"); // Get the <p> element using its id
  
    // Use if statement to check if current time is before 12 PM (noon)
    if (currentTime < 12) {
      paragraphElement.innerHTML = "Good morning!"; // Update innerHTML of <p> element
    } else if (currentTime >=12 == currentTime < 18) {
      paragraphElement.innerHTML = "Good afternoon!"; // Update innerHTML of <p> element
    } else {
        paragraphElement.innerHTML = "Good evening!"; // Update innerHTML of <p> element
    }
}
    
