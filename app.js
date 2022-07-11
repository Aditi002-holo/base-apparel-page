const form = document.getElementById('form');
const submitBtn = document.querySelector('.submit');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const emailAlert = document.querySelector('.email-alert');

submitBtn.addEventListener('click', e => {
    console.log('im in');
    e.preventDefault();
    const test = /^[\w]+[@][\w]+[\.][a-z]{2,3}/.test(email.value);
    console.log(test);
    if(!test) {
        emailAlert.classList.add('show-email-alert');
        console.log(errorIcon.classList);
        errorIcon.classList.add('show-error-icon');
    } else {
        form.submit();
    }
});