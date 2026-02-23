import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const statusRef = useRef(null);

  // Clear status on mount (e.g. when page is refreshed or user navigates back)
  useEffect(() => {
    setStatus({});
  }, []);

  // Scroll status message into view on mobile when it appears
  useEffect(() => {
    if (status.message && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [status.message]);

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({});
    try {
      const baseUrl = (process.env.REACT_APP_API_URL || "http://localhost:5001").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
        mode: 'cors',
      });
      const text = await response.text();
      let result;
      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        throw new Error('Invalid server response');
      }
      if (result.code === 200) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully!' });
        setTimeout(() => setStatus({}), 5000);
      } else {
        setStatus({ success: false, message: result.error || 'Something went wrong. Please try again later.' });
      }
    } catch (err) {
      const message = err.message === 'Failed to fetch'
        ? 'Network error. Check your connection and try again.'
        : (err.message || 'Failed to send. Please try again later.');
      setStatus({ success: false, message });
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>Get In Touch</h2>
        <Row className="align-items-stretch contact-row">
          <Col xs={12} md={6} className="contact-col">
            <div className="contact-col-inner">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`contact-image-wrapper ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                    <img src={contactImg} alt="Contact Us"/>
                  </div>
                }
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={12} md={6} className="contact-col">
            <div className="contact-col-inner">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`contact-form-wrapper ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <div className="contact-form-glass">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col xs={12} className="px-1">
                        <p ref={statusRef} className={`contact-status ${status.success === false ? "danger" : "success"}`}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                </div>
                </div>}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
