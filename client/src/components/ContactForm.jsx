import { useRef, useState } from 'react';
import { Col, Button } from 'rsuite';
import axios from 'axios';

function ContactForm() {
    const [fields, setFields] = useState({
        from: atob('dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ=='),
        to: 'keatonbrewsterdev@gmail.com',
        subject: '',
        text: '',
    })

    const subject = useRef();
    const text = useRef();
    const from = useRef();

    function handleInputChange(event) {
        setFields({
            ...fields,
            subject: subject.current.value,
            text: `mesage: ${text.current.value} \n from: ${from.current.value}`
        })
    }

    function thankYou() {
        alert('Thank you for reaching out! I will get in touch with you as soon as I can!')
    }

    function submitForm(event) {
        event.preventDefault();

        if (typeof (fields.text) === 'string') {
            axios.post('/api/contact', fields)
                .then(() => {
                    thankYou();
                })
                .catch(error => console.error(error));
        } else {
            alert('Please fill out all fields');
            return;
        }
    }

    return (
        <>
            <Col xs={6} sm={12} lg={12}>
                <form onSubmit={submitForm} name="contactForm" className="">
                    <input onChange={handleInputChange} ref={subject} autoComplete="off" name="subject" className="contactInput" type="text" placeholder="Subject" />
                    <textarea onChange={handleInputChange} ref={text} autoComplete="off" name="message" rows="5" className="contactInput" type="text"
                        placeholder="Your message here"></textarea>
                    <input onChange={handleInputChange} ref={from} autoComplete="off" id="email" className="contactInput" type="email" name="email"
                        placeholder="Your email address" />
                    <Button block type="submit" className="submit">s e n d</Button>
                </form>
            </Col>
        </>
    )
}

export default ContactForm