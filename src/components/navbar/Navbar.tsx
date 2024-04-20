import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolidBg, setIsSolidBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSolidBg(true);
      } else {
        setIsSolidBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navContainer} ${isSolidBg ? styles.solidBg : ""}`}>
    
  <div className={styles.navContainer}>
    <div className={styles.logo}>
          <a href="#">
            <img src="/img/whitelogo.png" alt="Logo" className="logoImg" />
          </a>
        </div>
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <Link href="#About">
            <span className="dot"></span>{" "}
            <span className="txt">About</span>
          </Link>
          <Link href="#TrainingProgram">
            <span className="dot"></span>{" "}
            <span className="txt">Programs</span>
          </Link>
 
        </div>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/enmotionfit" className="socialLink">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558229676688" className="socialLink">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/enmotionfit" className="socialLink">
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;