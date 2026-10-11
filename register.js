const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{3,20}$/;
document.getElementById("registerButton").addEventListener("click", function(event) {
    event.preventDefault();

    if (document.getElementById("password").value !== document.getElementById("verifyPassword").value) {
        alert("Passwords do not match!");
    }else {
        if (!regex.test(document.getElementById("password").value)) {
            alert("Password must be 3-20 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
            return;
        }
        else if (document.getElementById("username").value === document.getElementById("password").value) {
            alert("Username and password cannot be the same.");
            return;
        }
        else if (document.getElementById("password").value !== document.getElementById("verifyPassword").value) {
            alert("Password and verify password must match.");
            return;
        }
        else{
            localStorage.setItem("username", document.getElementById("username").value);
            localStorage.setItem("password", document.getElementById("password").value);
            alert("Registration successful!");
            window.location.href = "login.html";
        }
    }
})