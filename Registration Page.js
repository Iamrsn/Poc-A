document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerform");
  
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phonenumber").value.trim();
      const password = document.getElementById("password").value;
  
      const user = {
        username,
        email,
        phoneNumber,
        password,
      };
  
      localStorage.setItem("registeredUser", JSON.stringify(user));
  
      alert("Registration Successful! Your data has been saved.");
  
      registerForm.reset();
    });
  });
  