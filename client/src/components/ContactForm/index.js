import { useRef, useState } from 'react';
import { Button, ButtonToolbar, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import './index.css';

function ContactForm() {
    return (
        <>
            <Col xs={6} sm={12} lg={12}>
                <form name="contactForm" className="">
                    <label>Send cat pics here (or questions, maybe comments. Let's chat)</label>
                    <input autoComplete="off" name="subject" className="form-control" type="text" placeholder="Subject" />
                    <textarea autoComplete="off" name="message" rows="5" className="form-control" type="text"
                        placeholder="Your message here"></textarea>
                    <input autoComplete="off" id="email" className="form-control" type="email" name="email"
                        placeholder="Your email address" />
                    <button type="submit" className="">s e n d</button>
                </form>
            </Col>
        </>
    )
}

export default ContactForm