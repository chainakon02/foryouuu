document.getElementById("submit-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password-input").value;
    const correctPassword = "05012002"; 
  
    if (passwordInput === correctPassword) {
     
      document.querySelector(".password-container").style.display = "none";
     
      document.querySelector(".container").style.display = "block";
      
      document.getElementById("additional-content").style.display = "block";
    } else {
     
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 3000); // ซ่อนข้อความหลัง 3 วินาที
    }
  });
  
