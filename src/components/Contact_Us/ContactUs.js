import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";

import "./Contact.scss";
import ScrollCache from "../ScrollToTop/ScrollToTop";

function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };
  const handleTelChange = (e) => {
    setTel(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSuccess(true);
    }

    setValidated(true);
  };
  const handleResetButton = (event) => {
    event.preventDefault();
    setSuccess(false);
    setFName("");
    setLName("");
    setEmail("");
    setTel("");
    setMessage("");
  };
  return (
    <Container className="mt-5 contact">
      <ScrollCache/>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <p>
            <span className="contactTitle">
              <MdEmail className="icon Mail" />
              Email:
            </span>{" "}
            <a href="mailto:eyeonicsupport@gmail.com">
              eyeonicsupport@gmail.com
            </a>
          </p>
          <p>
            <span className="contactTitle">
              <BsFillTelephoneFill className="icon Telephone" />
              Tel:{" "}
            </span>
            <a href="tel:123456789">123456789</a>
          </p>
          <p>
            <span className="contactTitle">
              <BsGeoAltFill className="icon location" />
              Location:{" "}
            </span>
            590, CMT8, Ward 11, District 3, Ho Chi Minh City, Viet Nam.{" "}
          </p>
          <Container>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d346.422414914226!2d106.66616510711152!3d10.786614588267454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xd2ecb62e0d050fe9!2zRlBUIEFwdGVjaCBIQ00gMSAtIEjhu4cgVGjhu5FuZyDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIFThur8gKFNpbmNlIDE5OTkp!5e0!3m2!1svi!2sus!4v1697291645775!5m2!1svi!2sus"
              width="90%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </Container>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              {success && (
                <Alert variant="success">
                  <h2>
                    <span className="mess-success">
                      Message send successfully{" "}
                    </span>
                  </h2>
                </Alert>
              )}
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={handleFNameChange}
                  value={fName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={handleLNameChange}
                  value={lName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                type="number"
                required
                value={tel}
                onChange={handleTelChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                value={message}
                onChange={handleMessageChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col sm={5}>
                <Button type="submit" className="mb-3">
                  SEND MESSAGE
                </Button>
              </Col>
              <Col sm={3}>
                <Button type="reset" onClick={handleResetButton}>
                  RESET
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
