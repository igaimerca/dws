(function() {
    const EMAILJS_PUBLIC_KEY = 'aOE3dWknbBO37EPba';
    const EMAILJS_SERVICE_ID = 'service_e2gqlni';
    const EMAILJS_TEMPLATE_ID = 'template_ztwzmpl';
    const RECIPIENT_EMAIL = 'igaimerca@gmail.com';

    emailjs.init(EMAILJS_PUBLIC_KEY);

    function createToast(message, isSuccess) {
        const toastId = 'toast-' + Date.now();
        const toastClass = isSuccess ? 'alert-success' : 'alert-danger';
        const icon = isSuccess ? 'lucide:check-circle' : 'lucide:alert-circle';
        
        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = `alert ${toastClass} position-fixed top-0 end-0 m-4 shadow-lg border-0 d-flex align-items-center gap-3`;
        toast.style.cssText = 'z-index: 9999; min-width: 300px; max-width: 500px; animation: slideInRight 0.3s ease-out;';
        toast.setAttribute('role', 'alert');
        
        toast.innerHTML = `
            <iconify-icon icon="${icon}" class="fs-5 flex-shrink-0"></iconify-icon>
            <span class="flex-grow-1">${message}</span>
            <button type="button" class="btn-close" aria-label="Close" onclick="this.closest('.alert').remove()"></button>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            const toastEl = document.getElementById(toastId);
            if (toastEl) {
                toastEl.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => toastEl.remove(), 300);
            }
        }, 5000);
    }

    function setLoadingState(submitBtn, isLoading) {
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            if (btnIcon) {
                btnIcon.setAttribute('icon', 'lucide:loader-2');
                btnIcon.classList.add('animate-spin');
            }
        } else {
            submitBtn.disabled = false;
            btnText.textContent = 'Submit message';
            if (btnIcon) {
                btnIcon.setAttribute('icon', 'lucide:arrow-up-right');
                btnIcon.classList.remove('animate-spin');
            }
        }
    }

    function handleFormSubmit(formId, submitBtnId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById(submitBtnId);
            if (!submitBtn) return;

            const formData = {
                user_name: form.querySelector('[name="user_name"]').value.trim(),
                user_email: form.querySelector('[name="user_email"]').value.trim(),
                message: form.querySelector('[name="message"]').value.trim(),
                to_email: RECIPIENT_EMAIL
            };

            if (!formData.user_name || !formData.user_email || !formData.message) {
                createToast('Please fill in all fields.', false);
                return;
            }

            setLoadingState(submitBtn, true);

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
                .then(function(response) {
                    createToast('Thank you! Your message has been sent successfully. We will get back to you soon.', true);
                    form.reset();
                    setLoadingState(submitBtn, false);
                }, function(error) {
                    console.error('EmailJS Error:', error);
                    createToast('Sorry, there was an error sending your message. Please try again or contact us directly at ' + RECIPIENT_EMAIL, false);
                    setLoadingState(submitBtn, false);
                });
        });
    }

    if (document.getElementById('contactForm')) {
        handleFormSubmit('contactForm', 'submitBtn');
    }

    if (document.getElementById('contactFormHome')) {
        handleFormSubmit('contactFormHome', 'submitBtnHome');
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
})();
