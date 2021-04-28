const axios = require('axios');

document.addEventListener("DOMContentLoaded", () => {

    //todo At some point in time this should be a modal
    const thankYou = () => {
        alert('Thank you for reaching out! I will get in touch with you as soon as I can!')
    }

    const sendMail = (message) => {
        if (typeof (message.text) === 'string') {
            axios.post('/api/contact', message)
                .then(() => {
                    thankYou();
                })
                .catch(error => console.error(error));
        } else {
            alert('Please fill out all fields');
            return;
        }
    }

    document.getElementsByName('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const message = {
            from: 'dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ==',
            to: 'keatonbrewsterdev@gmail.com',
            subject: ``,
            text: ``
        };

        sendMail(message);
    })
})