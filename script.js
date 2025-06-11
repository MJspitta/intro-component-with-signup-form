const signupBtn = document.getElementById('signup-btn');


const checkSignupForm = () => {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();


  
}


signupBtn.addEventListener('submit', checkSignupForm);