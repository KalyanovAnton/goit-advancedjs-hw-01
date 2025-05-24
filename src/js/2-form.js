let formData = {
  email: '',
  message: '',
};

const refs = {
  inputEl: document.querySelector('.feedback-form'),
};

const fillFormFields = feedbackForm => {
  const formDataLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDataLS === null) {
    return;
  }

  formData = formDataLS;

  const formDataLSKeys = Object.keys(formDataLS);

  for (const key of formDataLSKeys) {
    feedbackForm.elements[key].value = formDataLS[key];
  }
};

fillFormFields(refs.inputEl);

refs.inputEl.addEventListener('input', ({ target: formField }) => {
  const formFieldName = formField.name;
  const formFieldValue = formField.value;

  formData[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

refs.inputEl.addEventListener('submit', event => {
  event.preventDefault();

  const formDataValue = Object.values(formData);

  if (formDataValue.includes('')) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
  }

  localStorage.removeItem('feedback-form-state');

  event.target.reset();

  formData = { email: '', message: '' };
});
