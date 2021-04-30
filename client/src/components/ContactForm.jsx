import { useRef, useState, useContext } from 'react';
import { Context } from '../utils/GlobalState';
import { Container, Panel, FlexboxGrid, Content, Button, Icon, ButtonToolbar } from 'rsuite';
import axios from 'axios';

function ContactForm() {

    const [store, dispatch] = useContext(Context);
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

    function submitForm(event) {
        event.preventDefault();

        if (typeof (fields.text) === 'string') {
            axios.post('/api/contact', fields)
                .then(() => {
                    dispatch({ type: 'form succeeded' })
                    dispatch({ type: 'show modal' })
                })
                .catch(() => {
                    dispatch({ type: 'form failed' })
                    dispatch({ type: 'show modal' })
                });
        } else {
            alert('Please fill out all fields');
            return;
        }
    }

    return (
        <>
            <div className="mt-3">
                <Container>
                    <Content>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item colspan={12}>
                                <Panel
                                    className="bg-dark"
                                    header={<h3>Please reach out, I want to hear from you!</h3>}
                                    bordered>
                                    <form
                                        onSubmit={submitForm}
                                        id="contactForm"
                                        className="">
                                        <input
                                            onChange={handleInputChange}
                                            ref={subject}
                                            autoComplete="off"
                                            name="subject"
                                            className="contactInput"
                                            type="text"
                                            placeholder="Subject (optional)"
                                        />
                                        <textarea
                                            onChange={handleInputChange}
                                            ref={text}
                                            autoComplete="off"
                                            name="message"
                                            rows="5"
                                            className="contactInput"
                                            type="text"
                                            placeholder="Your message here"
                                            required
                                        />
                                        <input
                                            onChange={handleInputChange}
                                            ref={from}
                                            autoComplete="off"
                                            id="email"
                                            className="contactInput"
                                            type="email"
                                            name="email"
                                            placeholder="Your email address"
                                            required
                                        />
                                        <ButtonToolbar>

                                            <Button type="submit" className="submit">send <Icon icon="arrow-circle-right" /></Button>
                                        </ButtonToolbar>
                                    </form>
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                </Container>
            </div>
        </>
    )
}

export default ContactForm