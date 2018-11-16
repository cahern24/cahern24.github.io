const form = document.querySelector('#add-user-input');
form.addEventListener('submit', function(evt) {
evt.preventDefault();
db.collection('userInput').add({
firstName: form.firstName.value,
lastName: form.lastName.value,
email: form.email.value,
message: form.message.value
});
form.firstName.value = '';
form.lastName.value = '';
form.email.value = '';
form.message.value = '';
});