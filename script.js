function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var nameInput = document.getElementById("name");
    var numberInput = document.getElementById("number");
    var emailInput = document.getElementById("email");
    var enquiryInput = document.getElementById("enquiry");
  
    // Validation patterns using regular expressions
    var namePattern = /^[A-Za-z\s]+$/;
    var numberPattern = /^\d+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Checking if inputs are valid
    if (!namePattern.test(nameInput.value)) {
      alert("Please enter a valid name.");
      nameInput.focus();
      return;
    }
  
    if (!numberPattern.test(numberInput.value)) {
      alert("Please enter a valid number.");
      numberInput.focus();
      return;
    }
  
    if (!emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }
  
    //success message if input is valid
    alert("Enquiry submitted successfully!");
    document.getElementById("enquiryForm").reset();
  }