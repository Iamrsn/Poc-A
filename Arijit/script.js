document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Fixed current password (this never changes)
    const fixedPassword = "mypassword"; 

    if (currentPassword !== fixedPassword) {
        alert("Current password is incorrect.");
        return;
    }

    if (newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    // Store new password in localStorage
    localStorage.setItem("newpassword", newPassword);
    console.log("Password saved in localStorage:", newPassword);

    alert("Password changed successfully!");

    document.getElementById("form").reset();
});
