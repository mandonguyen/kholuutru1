if (localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
    // Do nothing or display a message
} else {
    document.getElementById("h1").textContent = "Thanks " + localStorage.getItem("username") + ", for using our services!";
    
}