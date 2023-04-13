function concatStrings () {
  // concat() Method
  var string1 = 'Hello'
  var string2 = 'World'

  // Concatenate two strings
  var concatenatedString = string1.concat(' ', string2)
  document.getElementById('concat_strings').innerHTML = concatenatedString
}

function slice_Method () {
  var sentence = 'All work and no play makes Johnny a dull boy.'
  var section = sentence.slice(27, 33)
  document.getElementById('slice').innerHTML = section
}

function upperCase () {
  // Define and execute toUpperCase() method
  var string1 = 'hello, world!'
  var upperCaseString = string1.toUpperCase()
  document.getElementById('upperCase').innerHTML = upperCaseString
}

function searchMethod () {
  // Define and execute search() method
  var string1 = 'hello, world!'
  var searchString = 'world'
  var searchResult = string1.search(searchString)
  document.getElementById('searchString').innerHTML = searchResult // Output: 7
}

function string_Method () {
  var x = 1125
  document.getElementById('num_to_string').innerHTML = x.toString()
}

function toPrecision_Method () {
  var x = 1293.5154376457234262476
  document.getElementById('toPrecision').innerHTML = x.toPrecision(4)
}

// Define and execute toFixed() method in a function
function formatNumber () {    
    var num = 1234.5678;
    var fixedNum = num.toFixed(2);
    document.getElementById("formattedNum").innerHTML = fixedNum;
}

// Define and execute valueOf() method in a function
function getStringValue () {  
  var str = 'Hello, World!';
  var stringValue = str.valueOf();
  document.getElementById("stringValue").innerHTML = stringValue;
}

