const signupForm = document.querySelector('.signup-form');


const checkSignupForm = (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const firstNameError = document.getElementById('first-name-error');
  const lastNameError = document.getElementById('last-name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  let isValid = true;

  if (!firstName.value.trim()) {
    firstNameError.textContent = 'First Name cannot be empty';
    document.querySelector('#first-name + i').style.display = 'block';
    isValid = false;
  } else {
    firstNameError.textContent = '';
    document.querySelector('#first-name + i').style.display = 'none';
  }

  if (!lastName.value.trim()) {
    lastNameError.textContent = 'Last Name cannot be empty';
    document.querySelector('#last-name + i').style.display = 'block';
    isValid = false;
  } else {
    lastNameError.textContent = '';
    document.querySelector('#last-name + i').style.display = 'none';
  }

  if (!email.value.trim()) {
    emailError.textContent = 'Email Address cannot be empty';
    document.querySelector('#email + i').style.display = 'block';
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Looks like this is not an email';
    document.querySelector('#email + i').style.display = 'block';
    isValid = false;
  } else {
    emailError.textContent = '';
    document.querySelector('#email + i').style.display = 'none';
  }

  if (!password.value.trim()) {
    passwordError.textContent = 'Password cannot be empty';
    document.querySelector('#password + i').style.display = 'block';
    isValid = false;
  } else {
    passwordError.textContent = '';
    document.querySelector('#password + i').style.display = 'none';
  }

  console.log(isValid);

  if (isValid) {
    signupForm.submit();
  } else {
    return false;
  }
  
}


signupForm.addEventListener('submit', checkSignupForm);