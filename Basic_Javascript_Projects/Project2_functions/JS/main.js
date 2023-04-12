 // JavaScript function to be called by the button click
 function changeText() {
    // Assign two variables
    var sent1 = "This is the beginning of the string";
    var sent2 = " and this is the end of the string";

    // Concatenate the variables using the += operator
    var result = sent1;
    result += sent2;

    // Use document.getElementById method to get the paragraph element
    var paragraph = document.getElementById("myParagraph");

    // Change the content of the paragraph element
    paragraph.innerHTML = result;
  }