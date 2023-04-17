document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Perform form validation
    let isValid = true;
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Please enter your name";
      isValid = false;
    }
    if (email.trim() === "") {
      document.getElementById("emailError").textContent = "Please enter your email";
      isValid = false;
    }
    if (message.trim() === "") {
      document.getElementById("messageError").textContent = "Please enter your message";
      isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("myForm").reset();
    }
  });