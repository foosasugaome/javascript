 
  // Define a function to display a string with object property value
  function constant_function() {

    const fruit = {
        name: "Apple",
        color: "Red",
        taste: "Sweet",
        origin: "United States",
        price: 0.99
      };

      // Change property's value
      fruit.color="Green";

      // Add  a property with a value
      fruit.quantity  = 10;

      // Display  a string  that includes the added property value and the changed property value using document.getElementById("Constant").innerHTML method.
      document.getElementById("Constant").innerHTML =fruit.quantity + " " + fruit.color  +  "  " + fruit.taste + " " + fruit.name + " from  " +  fruit.origin + " priced at " + fruit.price;      
  }
  
  