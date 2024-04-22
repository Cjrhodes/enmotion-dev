import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function TransparentNavbar() {
  const [colorChange, setColorChange] = useState(false);

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
    <Navbar expand="lg" fixed="top" style={{ transition: '0.4s', backgroundColor: colorChange ? 'black' : 'transparent', color: 'white' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/img/whitelogo.png" alt="Logo" style={{ height: '70px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <Nav className="mx-auto">
            <Nav.Link href="#home" style={{ color: 'white', fontSize: '1.2rem' }}>Home</Nav.Link>
            <Nav.Link href="#About" style={{ color: 'white', fontSize: '1.2rem' }}>About</Nav.Link>
            <Nav.Link href="#TrainingProgram" style={{ color: 'white', fontSize: '1.2rem' }}>Programs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/profile.php?id=61558229676688" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/enmotionfit" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faXTwitter} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/enmotionfit/?hl=en" style={{ color: 'white', fontSize: '1.8rem' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TransparentNavbar;
