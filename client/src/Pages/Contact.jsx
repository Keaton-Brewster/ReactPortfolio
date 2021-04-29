import React from 'react';
import ContactForm from '../components/ContactForm';
import { Grid } from 'rsuite';

function Contact() {
    return (
        <div className='parent-center'>
            <div className='child-center'>
                <h3 className='text-center'>Send cat pics here (or questions, maybe comments. Let's chat)</h3>
                <Grid fluid>
                    <ContactForm />
                </Grid>
            </div>
        </div >
    )
}

export default Contact;