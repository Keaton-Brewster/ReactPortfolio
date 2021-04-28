import ContactForm from '../../components/ContactForm';
import Links from '../../components/Links';
import { Grid, Row, Col, Divider } from 'rsuite';

function Contact() {
    return (
        <>
            <h2>Send cat pics here (or questions, maybe comments. Let's chat)</h2>
            <Divider />
            <Grid fluid>
                <Row>
                    <Col xs={8} sm={6} lg={6} />
                    <ContactForm />
                    <Col xs={8} sm={6} lg={6} />
                </Row>
            </Grid>
            <Links />
        </>
    )
}

export default Contact;