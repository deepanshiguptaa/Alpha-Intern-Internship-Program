document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    const passwordList = document.getElementById("passwordList");
  
    passwordForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const siteName = document.getElementById("siteName").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      const passwordItem = document.createElement("div");
      passwordItem.classList.add("password-item");
      passwordItem.innerHTML = `
        <strong>Site Name:</strong> ${siteName}<br>
        <strong>Username:</strong> ${username}<br>
        <strong>Password:</strong> ${password}
      `;
  
      passwordList.appendChild(passwordItem);
  
      // Clear form fields
      passwordForm.reset();
    });
  });
  