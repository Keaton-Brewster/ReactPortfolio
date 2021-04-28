import ContactForm from '../../components/ContactForm';

function Contact() {
    return (
        <div className="body row d-none d-lg-flex">

            <div name="contact_me-page" className="text-center col-8 mt-5 ml-5 source-code-pro txt-light">

                <div className="clearfix">
                    <ContactForm />
                </div>

                <aside id="socials" className="mt-5 bg-dark clearfix display-3 justify-content-around">
                </aside>
            </div>
        </div>
    )
}

export default Contact;