import { useState, useRef, useEffect } from "react";
import { Col } from "react-bootstrap";
import { AnimatedOnScroll } from './AnimatedOnScroll';

export const ProjectCard = ({ title, description, imgUrl, url, liveUrl, hoverText }) => {
  const displayText = hoverText ?? description;
  const [overlayOpen, setOverlayOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!overlayOpen) return;
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOverlayOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [overlayOpen]);

  const handleCardTap = (e) => {
    if (e.target.closest("a")) return;
    setOverlayOpen((prev) => !prev);
  };

  const cardClass = `proj-imgbx${overlayOpen ? " proj-card-overlay-open" : ""}`;
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div ref={cardRef} onClick={handleCardTap} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleCardTap(e)} aria-label={`${title} - tap to ${overlayOpen ? "hide" : "show"} details`} style={{ touchAction: "manipulation" }}>
        <AnimatedOnScroll animation="animate__fadeInUp" partialVisibility className={cardClass}>
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
        </AnimatedOnScroll>
      </div>
    </Col>
  )
}
