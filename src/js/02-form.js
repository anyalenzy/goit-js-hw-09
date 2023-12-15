const form = document.querySelector('.feedback-form'),
  input = form.elements.email,
  textArea = form.elements.message,
  localStorageKey = 'feedback-form-state';

const formDataObject = {};

const localFormData = JSON.parse(localStorage.getItem(localStorageKey));
if (localFormData) {
  input.value = localFormData.email;
  textArea.value = localFormData.message;
  formDataObject.email = localFormData.email;
  formDataObject.message = localFormData.message;
}

form.addEventListener('input', e => {
  formDataObject.email = input.value.trim();
  formDataObject.message = textArea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formDataObject));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim() !== '' && textArea.value.trim() !== '') {
    console.log(formDataObject);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill out all fields!');
  }
});
