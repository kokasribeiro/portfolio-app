import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import contactImg from "../assets/img/contact-img.png";
import { AnimatedOnScroll } from './AnimatedOnScroll';

const TOAST_DURATION = 3500;

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [toast]);

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setToast(null);
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
        setToast({ type: 'success', message: 'Message sent successfully!' });
      } else {
        setToast({ type: 'error', message: result.error || 'Something went wrong. Please try again later.' });
      }
    } catch (err) {
      const message = err.message === 'Failed to fetch'
        ? 'Network error. Check your connection and try again.'
        : (err.message || 'Failed to send. Please try again later.');
      setToast({ type: 'error', message });
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      {toast && (
        <div className={`contact-toast contact-toast-${toast.type}`} role="alert" aria-live="polite">
          {toast.type === 'success' ? (
            <CheckCircleFill className="contact-toast-icon" />
          ) : (
            <XCircleFill className="contact-toast-icon" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
      <Container className="card-section-container">
        <h2 className="section-title">Get In Touch</h2>
        <Row className="align-items-stretch contact-row">
          <Col xs={12} md={6} className="contact-col">
            <div className="contact-col-inner">
              <AnimatedOnScroll animation="animate__zoomIn" className="contact-image-wrapper">
                <img src={contactImg} alt="Contact Us"/>
              </AnimatedOnScroll>
            </div>
          </Col>
          <Col xs={12} md={6} className="contact-col">
            <div className="contact-col-inner">
              <AnimatedOnScroll animation="animate__fadeIn" className="contact-form-wrapper">
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
                  </Row>
                </form>
                </div>
              </AnimatedOnScroll>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
