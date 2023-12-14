const passwordInput = document.getElementById('pwd');
const eyeSlashFill = document.getElementById('eye-icon');

eyeSlashFill.addEventListener('click', () => {
  if(passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeSlashFill.classList.add("bi-eye-fill");
    eyeSlashFill.classList.remove("bi-eye-slash-fill")
  }else {
    passwordInput.type = "password";
    eyeSlashFill.classList.add("bi-eye-slash-fill");
    eyeSlashFill.classList.remove("bi-eye-fill")
  }
})
