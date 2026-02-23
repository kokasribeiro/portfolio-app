import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
];

const LOGO_WIDTH = 80;
const GAP = 40;
const HALF_TRACK_WIDTH = skills.length * (LOGO_WIDTH + GAP);
const SCROLL_SPEED = 0.4;
const ARROW_JUMP = 180;

export const Skills = () => {
  const trackRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    let animationId;
    const animate = () => {
      positionRef.current += SCROLL_SPEED;
      if (positionRef.current >= HALF_TRACK_WIDTH) {
        positionRef.current -= HALF_TRACK_WIDTH;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const scrollLeft = () => {
    positionRef.current += ARROW_JUMP;
    if (positionRef.current >= HALF_TRACK_WIDTH) {
      positionRef.current -= HALF_TRACK_WIDTH;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    }
  };

  const scrollRight = () => {
    positionRef.current -= ARROW_JUMP;
    if (positionRef.current < 0) {
      positionRef.current += HALF_TRACK_WIDTH;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container card-section-container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technologies and tools I work with</p>
              <div className="skills-marquee-wrapper">
                <button
                  type="button"
                  className="skill-carousel-arrow skill-carousel-arrow-left"
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <ChevronLeft size={28} />
                </button>
                <div className="skills-marquee">
                  <div ref={trackRef} className="skills-marquee-track">
                    {[...skills, ...skills].map((skill, index) => (
                      <div key={index} className="skill-logo-wrapper">
                        <div className="skill-logo">
                          <img src={skill.icon} alt={skill.name} />
                          <span className="skill-logo-tooltip">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="skill-carousel-arrow skill-carousel-arrow-right"
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
