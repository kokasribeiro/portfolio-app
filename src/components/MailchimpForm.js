import { Col } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL || ''}?u=${process.env.REACT_APP_MAILCHIMP_U || ''}&id=${process.env.REACT_APP_MAILCHIMP_ID || ''}`;

  if (!process.env.REACT_APP_MAILCHIMP_URL) {
    return (
      <Col lg={12}>
        <div className="newsletter-bx">
          <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Configure REACT_APP_MAILCHIMP_URL in .env to enable newsletter signup.</p>
        </div>
      </Col>
    );
  }

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}
