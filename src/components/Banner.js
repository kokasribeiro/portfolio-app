import { Container } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { AnimatedOnScroll } from './AnimatedOnScroll';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <div className="banner-content">
          <AnimatedOnScroll animation="animate__fadeIn">
            <span className="tagline">Web Developer · Geneva</span>
                <h1>Nelson Ribeiro</h1>
                <p className="banner-subtitle">
                  Building clean, reliable web applications with a focus on quality and user experience.
                  I deliver well-structured interfaces that are purposeful and easy to maintain.
                </p>
                <a href="#connect" style={{ textDecoration: 'none' }}>
                  <button type="button">Get in Touch <ArrowRightCircle size={22} /></button>
                </a>
          </AnimatedOnScroll>
        </div>
      </Container>
    </section>
  );
};
