// Define the dictionary object
function my_dictionary() {
    var Fruit = {
        Name : "Apple",
        Color :  "Red, Greeen",
        Taste :  "Sweet/Sour"
    }        
    delete Fruit.Taste; // Delete  KVP  Taste
    document.getElementById('Dictionary').innerHTML =  Fruit.Name  +  Fruit.Color +  Fruit.Taste; //  Output
  };
  
  // Event Function to output a value from the dictionary
  function outputValue() {
    my_dictionary();    
  }
  