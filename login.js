const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault();

    if (document.getElementById("username").value === storedUsername && document.getElementById("password").value === storedPassword) {
    alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
        alert("Please register if you don't have an account.");
    }
})