const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e)=> {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value.length < 8 || confirmPassword.value.length < 8) {
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
    e.preventDefault();
    alert("Password must be at least 8 characters long.");
    } else if (password.value != confirmPassword.value){
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        e.preventDefault();
        alert("Passwords do not match. Please ensure they are the same.");    
    };
});





