import { Person, CodeSlash, Lightbulb } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="container card-section-container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`about-me-card ${
                    isVisible ? 'animate__animated animate__fadeInUp' : ''
                  }`}
                >
                  <div className="about-me-card-inner">
                    <div className="about-me-header">
                      <div className="about-me-icon">
                        <Person size={32} />
                      </div>
                      <h2>About Me</h2>
                      <p className="about-me-tagline">
                        Developer & Problem Solver
                      </p>
                    </div>
                    <div className="about-me-content">
                      <p>
                        {`I'm a Junior Full-Stack Web Developer based in Geneva.
                        I build modern, scalable web applications using React, TypeScript, Node.js, and PostgreSQL.
                        I enjoy working on both frontend and backend, focusing on clean code, performance, and user-friendly solutions. I've built projects ranging from frontend applications to REST APIs with validation and database integration.
                        I'm currently seeking a junior or internship opportunity in Switzerland where I can continue learning, contribute to real projects, and grow as a developer.`}
                      </p>
                    </div>
                    <div className="about-me-highlights">
                      <div className="about-me-highlight">
                        <CodeSlash size={20} />
                        <span>Full-stack development</span>
                      </div>
                      <div className="about-me-highlight">
                        <Lightbulb size={20} />
                        <span>Clean code & best practices</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
