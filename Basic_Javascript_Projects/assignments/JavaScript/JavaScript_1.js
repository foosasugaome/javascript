function changeContent() {
    // Get all elements with class name "content"
    let contentElements = document.getElementsByClassName("content");
    
    // Loop through the elements and change their content
    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].getElementsByTagName("h2")[0].innerHTML = "New Heading " + (i + 1);
      contentElements[i].getElementsByTagName("p")[0].innerHTML = "New Content " + (i + 1);
    }
  }

  function drawGraphic() {
    // Get the canvas element by id
    let canvas = document.getElementById("myCanvas");
    
    // Get the canvas context
    let ctx = canvas.getContext("2d");
    
    // Set fill style to red
    ctx.fillStyle = "red";
    
    // Create a gradient object
    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

     // Add color stops to the gradient
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "green");
    gradient.addColorStop(1, "blue");
  
    // Set the fill style to the gradient
    ctx.fillStyle = gradient;

    // Draw a filled rectangle
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }