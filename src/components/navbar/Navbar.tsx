import Link from "next/link";



const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">

        <div className="logo">
          <a href="#">
            <img src="/img/whitelogo.png" alt="Logo" className="logoImg" />
          </a>
        </div>      
        <div className="navLinks">
        <Link href="#About">
<span className="dot"></span>{" "}
<span className="txt">About</span>
</Link>
        <Link href="#TrainingProgram">
<span className="dot"></span>{" "}
<span className="txt">Programs</span>
</Link>
<Link href="#TrainingProgram">
<span className="dot"></span>{" "}
<span className="txt">Staff</span>
</Link>
        </div>
        <div className="socialLinks">
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
      </div>
    </nav>
  );
};



export default Navbar;