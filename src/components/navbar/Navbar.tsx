import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Navbar.module.css';

function TransparentNavbar() {
  const [colorChange, setColorChange] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    }
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={styles.navbar} style={{ transition: '0.4s', backgroundColor: colorChange ? 'black' : 'transparent', color: 'white' }}>
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <img src="/img/whitelogo.png" alt="Logo" style={{ height: '70px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
          <Nav className={styles.centerNav}>
            <Nav.Link href="#home" style={{ color: 'white', fontSize: '1.2rem' }}>Home</Nav.Link>
            <Nav.Link href="#About" style={{ color: 'white', fontSize: '1.2rem' }}>About</Nav.Link>
            <Nav.Link href="#TrainingProgram" style={{ color: 'white', fontSize: '1.2rem' }}>Programs</Nav.Link>
          </Nav>
          <Nav className={styles.socialNav}>
            <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
            <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
          <Nav className={styles.hamburgerMenu}>
            <Nav.Link href="#" className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
              {/* Hamburger icon */}
            </Nav.Link>
            {showMenu && (
              <div className={styles.hamburgerMenuContent}>
                <Nav className={styles.navLinks}>
                  <Nav.Link href="#home" style={{ color: 'white', fontSize: '1.2rem' }}>Home</Nav.Link>
                  <Nav.Link href="#About" style={{ color: 'white', fontSize: '1.2rem' }}>About</Nav.Link>
                  <Nav.Link href="#TrainingProgram" style={{ color: 'white', fontSize: '1.2rem' }}>Programs</Nav.Link>
                </Nav>
                <Nav className={styles.socialNav}>
                  <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </Nav.Link>
                  <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Nav.Link>
                  <Nav.Link href="(link unavailable)" style={{ color: 'white', fontSize: '1.8rem' }}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Nav.Link>
                </Nav>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TransparentNavbar;