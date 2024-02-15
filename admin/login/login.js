function validateLogin() {
    // Get the values of username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation (you can add more complex validation logic)
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
    } else {
      // Perform login logic (you can make an AJAX request here)
      alert("Logged in successfully!");
    }
  }
  