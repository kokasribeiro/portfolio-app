import { Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const ProjectCard = ({ title, description, imgUrl, url, liveUrl, hoverText }) => {
  const displayText = hoverText ?? description;
  return (
    <Col xs={12} sm={6} md={4}>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
      <div className={`proj-imgbx ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className={hoverText ? "proj-txtx-detail" : ""}>{displayText}</span>
          <div className="proj-link-btns">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link-btn proj-link-btn-demo">
                Live Demo
              </a>
            )}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
        )}
      </TrackVisibility>
    </Col>
  )
}
