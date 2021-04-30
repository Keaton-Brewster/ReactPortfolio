import React from 'react';
import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';
import { Grid } from 'rsuite';

function Contact() {
    return (
        <div classname="container">
            <Grid fluid>
                <ContactForm />
            </Grid>
            <Modal />
        </div>
    )
}

export default Contact;