import { Container, Row, Col } from "react-bootstrap";
import { Person, CodeSlash, GeoAlt, Briefcase } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container className="card-section-container">
        <Row>
          <Col xs={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`about-me-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
                  <div className="about-me-card-inner">
                    <div className="about-me-header">
                      <div className="about-me-icon">
                        <Person size={32} />
                      </div>
                      <h2>About Me</h2>
                    </div>
                    <div className="about-me-content">
                      <p>
                        I build modern and scalable web applications with a strong focus on clean structure, performance, and usability.
                        I enjoy working across both frontend and backend, always aiming to deliver clear and well‑thought‑out solutions.
                      </p>
                      <p>
                        I've worked on projects ranging from user‑facing applications to structured APIs, gaining experience in problem‑solving, validation, and application logic.
                        I value clean code, attention to detail, and continuous improvement.
                      </p>
                    </div>
                    <div className="about-me-highlights">
                      <div className="about-me-highlight">
                        <CodeSlash size={20} />
                        <span>Full-stack development</span>
                      </div>
                      <div className="about-me-highlight">
                        <GeoAlt size={20} />
                        <span>Based in Geneva</span>
                      </div>
                      <a href="mailto:kokasribeiro@gmail.com" className="about-me-highlight" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Briefcase size={20} />
                        <span>Open to opportunities</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
