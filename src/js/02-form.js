const form = document.querySelector('.feedback-form'),
  input = form.elements.email,
  textArea = form.elements.message,
  localStorageKey = 'feedback-form-state';

const formDataObject = {
  email: input.value,
  message: textArea.value,
};

const localFormData = JSON.parse(localStorage.getItem(localStorageKey));
if (localFormData) {
  input.value = localFormData.email;
  textArea.value = localFormData.message;
}

form.addEventListener('input', e => {
  if (e.target === input) {
    formDataObject.email = e.target.value;
  } else if (e.target === textArea) {
    formDataObject.message = e.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formDataObject));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value !== '' || textArea.value !== '') {
    console.log(formDataObject);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formDataObject.email = '';
    formDataObject.message = '';
  } else {
    alert('Please fill out all fields!');
  }
});
