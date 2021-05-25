import React from "react";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import { FlexboxGrid } from "rsuite";

function Contact() {
  return (
    <div className="container">
      <FlexboxGrid fluid justify="center">
        <ContactForm />
      </FlexboxGrid>
      <Modal />
    </div>
  );
}

export default Contact;
