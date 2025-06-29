const forms = document.querySelectorAll('form.has-validation');
const PATHS = {
  login: '../../index.html',
  signup: 'assets/pages/signup.html',
  welcome: 'assets/pages/welcome.html',
};

// page navigation handler
function handlePageNavigation(targetPath) {
  window.location.href = targetPath;
}

// dynamic form handler
for (let i = 0; i < forms.length; i++) {
  const form = forms[i];

  // onSubmit form event
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    handleFormSubmit(form);
  });

  // on input field value change event
  const inputs = form.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('input', function () {
      handleInputValidity(input);
    });
  }
}

// onSubmit event handler
function handleFormSubmit(form) {
  const inputs = form.querySelectorAll('input');
  const submitBtn = form.querySelector('.btn[type="submit"]');
  const userInfo = {
    name: form.username?.value,
    email: form.email.value,
    password: form.password.value,
  };
  const users = getAllUsers();
  const isEmailExists = users.some((u) => u.email === userInfo.email);
  const isNameExists = users.some((u) => u.name === userInfo.name);
  let input;

  for (let i = 0; i < inputs.length; i++) {
    input = inputs[i];
    const inputValue = input.value.trim();
    const inputFeedback = input.nextElementSibling;
    const inputName = input.name;
    if (!inputValue) {
      input.classList.add('is-invalid');
      inputFeedback.innerHTML = `${inputName} is required.`;
      return;
    }
    if (form.id === 'signupForm') {
      handleInputValidity(input, isEmailExists, isNameExists);
    } else {
      handleInputValidity(input);
    }
  }

  if (handleInputValidity(input)) {
    // onSubmit signup form with valid user
    if (form.id === 'signupForm' && !isEmailExists && !isNameExists) {
      submitBtn.classList.add('disabled');
      users.push(userInfo);
      createNewUser(users);
      showSuccessToaster('Signed up successfully', 3000, function () {
        handlePageNavigation(PATHS.login);
      });
    }
    // onSubmit signin form with exists user
    if (form.id === 'loginForm') {
      const userExists = users.find((user) => user.email === userInfo.email);
      if (!userExists) {
        showErrorToaster('Email not found');
      } else if (userExists.password !== userInfo.password) {
        showErrorToaster('Incorrect password');
      } else {
        submitBtn.classList.add('disabled');
        showSuccessToaster('Signed in successfully', 3000, function () {
          handlePageNavigation(PATHS.welcome);
          localStorage.setItem('currentUser', JSON.stringify(userExists));
        });
      }
    }
  }
}

// onInput event handler (input value change)
function handleInputValidity(input, isEmailExists, isNameExists) {
  const inputValue = input.value.trim();
  const inputName = input.name;
  const inputFeedback = input.nextElementSibling;
  const inputType = input.type;
  let isValid = true;
  input.classList.remove('is-valid', 'is-invalid');
  inputFeedback.innerHTML = '';

  if (!inputValue) {
    input.classList.remove('is-invalid');
    return;
  }

  if (isEmailExists) {
    showErrorToaster('Email already exists');
    isValid = false;
  }
  if (isNameExists) {
    showErrorToaster('Username already taken');
    isValid = false;
  }
  if (inputType && !input.checkValidity()) {
    if (inputType === 'text' || inputType === 'password') {
      if (input.minLength > 0 && inputValue.length < input.minLength) {
        input.classList.add('is-invalid');
        inputFeedback.innerHTML = `${inputName} must be at least ${input.minLength} characters.`;
        isValid = false;
        return;
      }
      if (input.maxLength > 0 && inputValue.length > input.maxLength) {
        input.classList.add('is-invalid');
        inputFeedback.innerHTML = `${inputName} must be no more than ${input.maxLength} characters.`;
        isValid = false;
        return;
      }
    } else {
      input.classList.add('is-invalid');
      inputFeedback.innerHTML = `Please enter a valid ${inputName}.`;
      isValid = false;
      return;
    }
  }

  input.classList.add('is-valid');
  return isValid;
}

// create new user
function createNewUser(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// get all users
function getAllUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

// success timed toaster
function showSuccessToaster(title, timerDuration, callbackAfterTimer) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timerDuration,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: 'success',
    title: title,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      if (typeof callbackAfterTimer === 'function') {
        callbackAfterTimer();
      }
    }
  });
}

// error toaster
function showErrorToaster(text) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
  });
  Toast.fire({
    icon: 'error',
    text: text,
  });
}
