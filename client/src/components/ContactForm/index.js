function ContactForm() {
    return (
        <form name="inquireLG" className="form-group inquire-form">
            <label>Send cat pics here (or questions, maybe comments. Let's chat)</label>
            <input autocomplete="off" name="inquireLG_subject" className="form-control contact_input" type="text" placeholder="Subject" />
            <textarea autocomplete="off" name="inquireLG_text" rows="5" className="form-control contact_input" type="text"
                placeholder="Your message here"></textarea>
            <input autocomplete="off" id="inquireLG_email" className="form-control contact_input" type="email" name="email"
                placeholder="Your email address" />
            <button type="submit" className="btn bg-secondary form-control contact_input hvr-underline-reveal">s e n d</button>
        </form>

    )
}

export default ContactForm