let emailField = document.querySelector('.email-field');
let subscribeForm = document.querySelector('.subscribe-form');
let successMessage = document.querySelector('.success-message');
let dismissButton = document.querySelector('.dismiss-message-button');
let emailMessage = document.querySelector('.email-message');
emailMessage.style.fontWeight = 'bold';

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!validEmail.test(emailField.value) || emailField.value === '') {
    let wrong = document.querySelector('.wrong-email');
    wrong.style.display = 'inline-block';
    emailField.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
    emailField.style.color = 'hsl(4, 100%, 67%)';
    emailField.style.border = 'solid 1px hsl(4, 100%, 67%)';
   return false;
  } else {
    subscribeForm.style.display = 'none';
    successMessage.style.display = 'block';
    emailMessage.textContent = emailField.value;
   }

   dismissButton.addEventListener('click', function () {
    // Скрываем сообщение
    successMessage.style.display = 'none';
  });
 });