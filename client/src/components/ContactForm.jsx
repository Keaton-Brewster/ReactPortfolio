import { useRef, useState } from 'react';
import { Modal, Col, Button, Icon } from 'rsuite';
import axios from 'axios';

function ContactForm() {
    const [fields, setFields] = useState({
        from: atob('dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ=='),
        to: 'keatonbrewsterdev@gmail.com',
        subject: '',
        text: '',
    })
    const [modal, setModal] = useState({ show: false });
    const [formSuccess, setFormSuccess] = useState(false)

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

    function submitForm(event) {
        event.preventDefault();

        if (typeof (fields.text) === 'string') {
            axios.post('/api/contact', fields)
                .then(() => {
                    setFormSuccess(true)
                    setModal({ show: true });
                })
                .catch(error => { 
                    setFormSuccess(false);
                    setModal({ show: true});
                    console.error(error) 
                });
        } else {
            alert('Please fill out all fields');
            return;
        }
    }

    function hideModal() {
        setModal({ show: false })
    }

    return (
        <>
            <Col xs={6} sm={12} lg={12}>
                <form onSubmit={submitForm} name="contactForm" className="">
                    <input onChange={handleInputChange} ref={subject} autoComplete="off" name="subject" className="contactInput" type="text" placeholder="Subject" />
                    <textarea onChange={handleInputChange} ref={text} autoComplete="off" name="message" rows="5" className="contactInput" type="text"
                        placeholder="Your message here"></textarea>
                    <input onChange={handleInputChange} ref={from} autoComplete="off" id="email" className="contactInput" type="email" name="email"
                        placeholder="Your email address" required />
                    <Button block type="submit" className="submit">send <Icon icon="arrow-circle-right" /></Button>
                </form>
            </Col>

            {/* This is just the modal for the form submit */}
            <div className="modal-container">
                <Modal show={modal.show} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title>
                            {formSuccess ?
                                <p>Success!</p> :
                                <p>Uh oh</p>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {formSuccess ?
                            <p>Thank you for reaching out. I hope to get in touch with you soon</p> :
                            <p>Something went wrong.. Please try again, or reach out to me in another way!</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={hideModal} appearance="primary">
                            close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ContactForm