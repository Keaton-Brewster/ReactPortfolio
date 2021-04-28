import { useRef, useState } from 'react';
import { Col, Button } from 'rsuite';
import './index.css';



// //todo At some point in time this should be a modal
// const thankYou = () => {
//     alert('Thank you for reaching out! I will get in touch with you as soon as I can!')
// }

// const sendMail = (message) => {
//     if (typeof (message.text) === 'string') {
//         fetch('/api/contact', {
//             body: message
//         })
//             .then(() => {
//                 thankYou();
//             })
//             .catch(error => console.error(error));
//     } else {
//         alert('Please fill out all fields');
//         return;
//     }
// }

// document.getElementsByName('contactForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const message = {
//         from: 'dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ==',
//         to: 'keatonbrewsterdev@gmail.com',
//         subject: ``,
//         text: ``
//     };

//     // sendMail(message);
//     console.log(message);
// })


function ContactForm() {
    const [fields, setFields] = useState({
        subject: '',
        message: '',
        email: ''
    })

    let subject = useRef();
    let message = useRef();
    let email = useRef();

    function handleInputChange(event) {
        console.log(fields)

        subject = subject.current.value;
        message = message.current.value;
        email = email.current.value;

        setFields({
            subject,
            message,
            email
        })
    }

    return (
        <>
            <Col xs={6} sm={12} lg={12}>
                <form name="contactForm" className="">
                    <input onChange={handleInputChange} ref={subject} autoComplete="off" name="subject" className="contactInput" type="text" placeholder="Subject" />
                    <textarea onChange={handleInputChange} ref={message} autoComplete="off" name="message" rows="5" className="contactInput" type="text"
                        placeholder="Your message here"></textarea>
                    <input onChange={handleInputChange} ref={email} autoComplete="off" id="email" className="contactInput" type="email" name="email"
                        placeholder="Your email address" />
                    <Button block type="submit" className="submit">s e n d</Button>
                </form>
            </Col>
        </>
    )
}

export default ContactForm