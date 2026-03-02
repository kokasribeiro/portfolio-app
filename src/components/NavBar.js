import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Github, MoonFill, SunFill } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = ({ theme, setTheme }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Router>
      <Navbar expand="md" expanded={expanded} onToggle={setExpanded} className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => { setActiveLink('home'); closeMenu(); }}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => { setActiveLink('about'); closeMenu(); }}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => { setActiveLink('skills'); closeMenu(); }}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => { setActiveLink('projects'); closeMenu(); }}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <span className="navbar-icons">
                <a href="https://github.com/kokasribeiro" target="_blank" rel="noopener noreferrer" className="navbar-github-link" aria-label="GitHub">
                  <span className="navbar-github-icon">
                    <Github size={24} />
                  </span>
                  <span className="navbar-github-label">GitHub</span>
                </a>
                <button
                  className={`navbar-theme-toggle ${theme === 'dark' ? 'sun' : ''}`}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <SunFill size={20} /> : <MoonFill size={20} />}
                </button>
              </span>
              <HashLink to='#connect' onClick={closeMenu}>
                <button className="vvd"><span>Get in Touch</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
