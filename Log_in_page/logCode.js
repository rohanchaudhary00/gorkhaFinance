const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye');

passwordInput.addEventListener('input', function () {
  if (passwordInput.value === '') {
    eyeIcon.style.display = 'none';
  } else {
    eyeIcon.style.display = 'block';
  }
});

eyeIcon.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
});



