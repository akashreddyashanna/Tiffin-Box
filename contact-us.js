const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phonenumber');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phonenumber-error');
const messageError = document.getElementById('yourmessage-error');

const validateName = () => {
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    nameError.style.display = 'inline';
    nameError.textContent = 'Please enter a name.';
  } else {
    nameError.style.display = 'none';
  }
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+[.-\w]*@[^\s@]+\.[^\s@]+$/i;
  if (emailValue === '') {
    emailError.style.display = 'none'; // Hide email error initially
  } else if (!emailRegex.test(emailValue)) {
    emailError.style.display = 'inline';
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.style.display = 'none';
  }
};

const validatePhone = () => {
  const phoneValue = phoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (phoneValue === '') {
    phoneError.style.display = 'none'; // Hide phone error initially
  } else if (!phoneRegex.test(phoneValue)) {
    phoneError.style.display = 'inline';
  } else {
    phoneError.style.display = 'none';
  }
};

const validateMessage = () => {
  const messageValue = messageInput.value.trim();
  if (messageValue.length < 2) {
    messageError.style.display = 'inline';
    messageError.textContent = 'Please enter a message (at least 2 characters).';
  } else {
    messageError.style.display = 'none';
  }
};

// Add event listeners for validation on focusout (leaving the field)
nameInput.addEventListener('focusout', validateName);
emailInput.addEventListener('focusout', validateEmail);
phoneInput.addEventListener('focusout', validatePhone);
messageInput.addEventListener('focusout', validateMessage);

// Add event listeners for in-field validation on input (typing)
nameInput.addEventListener('input', () => {
  nameError.style.display = 'none'; // Clear any previous name error on input
});
emailInput.addEventListener('input', () => {
  emailError.style.display = 'none'; // Clear any previous email error on input
});
phoneInput.addEventListener('input', () => {
  phoneError.style.display = 'none'; // Clear any previous phone error on input
});
messageInput.addEventListener('input', () => {
  messageError.style.display = 'none'; // Clear any previous message error on input
});

// Initially hide all error messages
nameError.style.display = 'none';
emailError.style.display = 'none';
phoneError.style.display = 'none';
messageError.style.display = 'none';

function handleFormSubmission() {
  event.preventDefault(); // Prevent the default form submission behavior

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Validate all input fields
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  // Check if there are any visible error messages and if all input fields are filled
  const hasErrors = Array.from(document.querySelectorAll('.error-label')).some(label => label.style.display !== 'none');
  const allFieldsFilled = nameValue !== '' && emailValue !== '' && phoneValue !== '' && messageValue !== '';

  // Show success message if there are no errors and all input fields are filled
  if (!hasErrors && allFieldsFilled) {
      // No visible errors and all fields are filled, proceed with success message
      document.getElementById("form-container").style.display="none";
      document.getElementById("success-message").style.display = "block";
  }
}


