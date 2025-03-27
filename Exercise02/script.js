function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  if (!hasNumber || !hasUppercase) {
    return "Password must contain at least one number and one uppercase letter.";
  }
  return "Your password is valid!";
}

const validateButton = document.getElementById("validateButton");
const passwordInput = document.getElementById("passwordInput");
const passwordDiv = document.getElementById("password");
const messageParagraph = document.getElementById("message");

validateButton.addEventListener("click", () => {
  const password = passwordInput.value;

  passwordDiv.textContent = `Entered Password: ${password}`;

  const message = validatePassword(password);
  messageParagraph.textContent = message;
});
