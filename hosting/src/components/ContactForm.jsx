import { useRef, useState, useContext } from "react";
import { Context } from "../utils/GlobalState";
import {
  FlexboxGrid,
  Col,
  Button,
  Icon,
  ButtonToolbar,
  FormGroup,
  ControlLabel,
  Form,
  HelpBlock,
} from "rsuite";
import Toast from "../utils/toast";
import emailjs, { init } from "emailjs-com";
const { Item } = FlexboxGrid;

function ContactForm() {
  init("user_ocB6sFq6aWikNbAvcC0Ld");
  // eslint-disable-next-line
  const [store, dispatch] = useContext(Context);
  const [fields, setFields] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });

  const subject = useRef();
  const message = useRef();
  const email = useRef();
  const name = useRef();

  function handleInputChange() {
    setFields({
      ...fields,
      from_email: email.current.value,
      from_name: name.current.value,
      subject: subject.current.value,
      message: message.current.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (fields.message !== "") {
      dispatch({ type: "START_LOADING" });
      dispatch({ type: "SHOW_MODAL" });
      emailjs.send("service_td6pe0j", "portfolio_contact", fields).then(
        (response) => {
          dispatch({ type: "FINISHED_LOADING" });
          dispatch({ type: "FORM_SUCCESS" });
        },
        (error) => {
          dispatch({ type: "FORM_FAILURE" });
          dispatch({ type: "ERROR", payload: error });
        }
      );
    } else {
      Toast("error", "Please fill out all fields", 2000);
      dispatch({ type: "ERROR", payload: e });
      return;
    }
  }

  return (
    <FlexboxGrid fluid justify="center" className="contact-form">
      <Item
        className="mt-3"
        componentClass={Col}
        colspan={16}
        md={12}
        sm={20}
        xs={22}
      >
        <h3 className="text-center">
          Please feel free to reach out. I would love to hear from you!
        </h3>
        <Form fluid={true} onSubmit={submitForm}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <input
              required
              className="contactText"
              type="message"
              ref={name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Subject</ControlLabel>
            <input
              className="contactText"
              type="message"
              ref={subject}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <textarea
              required
              className="contactText"
              ref={message}
              rows={5}
              componentClass="textarea"
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <input
              className="contactText"
              required
              ref={email}
              onChange={handleInputChange}
              type="email"
            />
            <HelpBlock>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button onClick={submitForm} className="submit">
                send <Icon icon="arrow-circle-right" />
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </Item>
    </FlexboxGrid>
  );
}

export default ContactForm;
