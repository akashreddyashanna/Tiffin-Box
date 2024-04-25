const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

const validateName = () => {
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    nameError.style.display = 'inline';
    nameError.textContent = 'Please enter your name.';
  } else {
    nameError.style.display = 'none';
  }
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+[.-\w]*@[^\s@]+\.[^\s@]+$/i;
  if (emailValue === '') {
    emailError.style.display = 'inline';
    emailError.textContent = 'Please enter your email.';
  } else if (!emailRegex.test(emailValue)) {
    emailError.style.display = 'inline';
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.style.display = 'none';
  }
};

// Add event listeners for validation on focusout (leaving the field)
nameInput.addEventListener('focusout', validateName);
emailInput.addEventListener('focusout', validateEmail);

// Initially hide all error messages
nameError.style.display = 'none';
emailError.style.display = 'none';

function handleFormSubmission()  {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate input fields
  validateName();
  validateEmail();

  // Check for visible error messages
  const hasNameError = nameError.style.display !== 'none';
  const hasEmailError = emailError.style.display !== 'none';
  const hasErrors = hasNameError || hasEmailError;

  if (!hasErrors) {
    document.getElementById("email-signup-form").style.display="none";
    document.getElementById("success-message").style.display = "block";
  }
}