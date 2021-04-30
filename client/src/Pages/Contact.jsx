import React from 'react';
import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';
import { Grid } from 'rsuite';

function Contact() {
    return (
        <div classname="container">
            <h3 className='text-center'>Send cat pics here (or questions, maybe comments. Let's chat)</h3>
            <Grid fluid>
                <ContactForm />
            </Grid>
            <Modal />
        </div>
    )
}

export default Contact;