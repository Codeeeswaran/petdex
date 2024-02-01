
  document.addEventListener("DOMContentLoaded", function () 
  {
   
      function handleSignUp() {
      
          var username = document.getElementById("username").value;
          var email = document.getElementById("email").value;
         var password = document.getElementById("password").value;

      
            if (!username || !email || !password) {
               alert("Please fill in all the fields");
               return;
               }

     
             var userData = {
               username: username,
               email: email,
               password: password,
             };

            console.log("User Data:", userData);

         }

   
    var signUpButton = document.querySelector(".signup-button");
    signUpButton.addEventListener("click", handleSignUp);
 } );


