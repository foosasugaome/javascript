let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Get all elements with class name "mySlides" and store them in an array
    let dots = document.getElementsByClassName("dot"); // Get all elements with class name "dot" and store them in an array
    
    if (n > slides.length) { // If n (slide index) is greater than the number of slides, set slideIndex to 1
      slideIndex = 1;
    }
    
    if (n < 1) { // If n (slide index) is less than 1, set slideIndex to the last slide
      slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Set display property of all slides to "none" to hide them
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots to deactivate them
    }
    
    slides[slideIndex-1].style.display = "block"; // Set display property of the current slide to "block" to show it
    dots[slideIndex-1].className += " active"; // Add "active" class to the current dot to activate it
  }
  