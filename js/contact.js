const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    
    //ServiceID - TemplateID - #form - publickey
    emailjs.sendForm('service_jie1y9z', 'template_3r1xsel', '#contact-form', '9MKlqRQVudXUDttvF')
            .then(() => {
                contactMessage.textContent = 'Message sent successfully ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)

                contactForm.reset()
            }, () => {
                contactMessage.textContent = 'Message not sent (service error) ❌'
            })
}


contactForm.addEventListener('submit', sendEmail)