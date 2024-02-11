// ---------------------PAssword Match---------------
const myForm = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const messageDiv = document.getElementById("message");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        messageDiv.innerHTML = "<p class='valid'>Passwords match!</p>";
    } else {
        messageDiv.innerHTML = "<p class='invalid'>Passwords do not match!</p>";
    }
});