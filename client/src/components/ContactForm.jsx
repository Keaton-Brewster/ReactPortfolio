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
  Form,
  HelpBlock,
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
  }

  function submitForm() {
    if (fields.text !== "") {
      dispatch({ type: "START_LODAING" });
      dispatch({ type: "SHOW_MODAL" });
      axios
        .post("/api/contact", fields)
        .then(() => {
          dispatch({ type: "FINISHED_LOADING" });
          dispatch({ type: "FORM_SUCCESS" });
        })
        .catch(() => {
          dispatch({ type: "FORM_FAILURE" });
        });
    } else {
      Toast("error", "Please fill out all fields", 2000);
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
        <h3>Please reach out, I want to hear from you!</h3>
        <Form fluid={true} onSubmit={submitForm}>
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
      </Item>
    </FlexboxGrid>
  );
}

export default ContactForm;
