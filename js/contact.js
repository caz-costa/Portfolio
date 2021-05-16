const form = document.querySelector('form')
const emailInput = document.querySelector('input[type="email"]')
const subjectInput = document.querySelector('input[type="text"]')
const messageInput = document.querySelector('textarea')
const sendButton = document.querySelector('button[type="submit"]')

const isEmailValid = (email) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return true
    }
    return false
}

const sendEmail = (evt) => {
    evt.preventDefault();
    sendButton.blur()

    if (!emailInput.value || !subjectInput.value || !messageInput.value) {
        form.reportValidity();
        return;
    }
    
    if (!isEmailValid(emailInput.value)) {
        form.reportValidity();
        return;
    }
    
    const templateParams = {
        from_email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    }

    emailjs.send('service_mi25ox3', 'template_mzidh94', templateParams, 'user_flAJxYUl8cak8SKIcLLwp')
        .then(function(response) {            
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    
    form.reset()
}

sendButton.addEventListener('click', sendEmail)