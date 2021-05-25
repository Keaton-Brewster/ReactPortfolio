import { useRef, useState, useContext } from "react";
import { Context } from "../utils/GlobalState";
import {
  Panel,
  FlexboxGrid,
  Col,
  Button,
  Icon,
  ButtonToolbar,
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  HelpBlock,
  Schema,
} from "rsuite";
import axios from "axios";
import Toast from "../utils/toast";
const { Item } = FlexboxGrid;

function ContactForm() {
  // eslint-disable-next-line
  const [store, dispatch] = useContext(Context);
  const [fields, setFields] = useState({
    from: atob("dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ=="),
    to: "keatonbrewsterdev@gmail.com",
    subject: "",
    text: "",
  });

  const subject = useRef();
  const text = useRef();
  const from = useRef();

  function handleInputChange() {
    setFields({
      ...fields,
      subject: subject.current.value,
      text: `mesage: ${text.current.value} \n from: ${from.current.value}`,
    });

    console.log(fields);
  }

  function submitForm() {
    if (typeof fields.text === "string") {
      axios
        .post("/api/contact", fields)
        .then(() => {
          dispatch({ type: "form succeeded" });
          dispatch({ type: "show modal" });
        })
        .catch(() => {
          dispatch({ type: "form failed" });
          dispatch({ type: "show modal" });
        });
    } else {
      alert("Please fill out all fields");
      return;
    }
  }

  return (
    <>
      <Item className="mt-3" componentClass={Col} colspan={24} md={16} sm={24}>
        <Panel
          header={<h3>Please reach out, I want to hear from you!</h3>}
          bordered
        >
          {/* <form onSubmit={submitForm} id="contactForm" className=""> */}
          <Form fluid={true} onSubmit={submitForm} id="contact-form">
            <FormGroup>
              <ControlLabel>Subject</ControlLabel>
              <input type="text" ref={subject} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Message</ControlLabel>
              <textarea
                ref={text}
                rows={5}
                componentClass="textarea"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <input
                required
                ref={from}
                onChange={handleInputChange}
                type="email"
              />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button type="submit" className="submit">
                  send <Icon icon="arrow-circle-right" />
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
          {/* <input
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
              <Button type="submit" className="submit">
                send <Icon icon="arrow-circle-right" />
              </Button>
            </ButtonToolbar> */}
          {/* </form> */}
        </Panel>
      </Item>
    </>
  );
}

export default ContactForm;
