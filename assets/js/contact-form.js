(function() {
    const EMAILJS_PUBLIC_KEY = 'aOE3dWknbBO37EPba';
    const EMAILJS_SERVICE_ID = 'service_e2gqlni';
    const EMAILJS_TEMPLATE_ID = 'template_ztwzmpl';
    const RECIPIENT_EMAIL = 'igaimerca@gmail.com';
    // const RECIPIENT_EMAIL = 'davidk@daveworksservices.com';

    emailjs.init(EMAILJS_PUBLIC_KEY);

    function showMessage(elementId, message, isSuccess) {
        const messageEl = document.getElementById(elementId);
        if (messageEl) {
            messageEl.className = `alert ${isSuccess ? 'alert-success' : 'alert-danger'}`;
            messageEl.textContent = message;
            messageEl.classList.remove('d-none');
            
            setTimeout(() => {
                messageEl.classList.add('d-none');
            }, 5000);
        }
    }

    function handleFormSubmit(formId, messageId, submitBtnId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (EMAILJS_PUBLIC_KEY === 'aOE3dWknbBO37EPba') {
                showMessage(messageId, 'Email service not configured. Please contact us directly at ' + RECIPIENT_EMAIL, false);
                return;
            }
            
            const submitBtn = document.getElementById(submitBtnId);
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = {
                user_name: form.querySelector('[name="user_name"]').value,
                user_email: form.querySelector('[name="user_email"]').value,
                message: form.querySelector('[name="message"]').value,
                to_email: RECIPIENT_EMAIL
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
                .then(function() {
                    showMessage(messageId, 'Thank you! Your message has been sent successfully. We will get back to you soon.', true);
                    form.reset();
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    console.error('EmailJS Error:', error);
                    showMessage(messageId, 'Sorry, there was an error sending your message. Please try again or contact us directly at ' + RECIPIENT_EMAIL, false);
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    if (document.getElementById('contactForm')) {
        handleFormSubmit('contactForm', 'formMessage', 'submitBtn');
    }

    if (document.getElementById('contactFormHome')) {
        handleFormSubmit('contactFormHome', 'formMessageHome', 'submitBtnHome');
    }
})();
