const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    // Use regex to validate password
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    const isValid = pattern.test(password);

    if (isValid) {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
});
