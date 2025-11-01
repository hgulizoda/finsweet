import { NavLink, Link } from "react-router-dom";

import shapes from "../assets/icons/Shapes.svg";
import shapesLong from "../assets/icons/Shapes long.svg";
import arrowBlack from "../assets/icons/arrowBlack.svg";
import blackLogo from "../assets/icons/blackLogo.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={shapes} alt="" />
        <div className="footer-top ">
          <div className="footer-column">
            <h2>Let's make something special</h2>
            <h4>Let's talk! 🤙 </h4>
            <p className="large">020 7993 2905</p>
            <p className="large">hi@finsweet.com</p>
          </div>
          <div className="footer-column">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/company">Company</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className="footer-column">
            <NavLink to="/service">Service</NavLink>
            <Link>Technical support</Link>
            <Link>Testing</Link>
            <Link>Development</Link>
            <Link>AWS/Azure </Link>
            <Link>Consulting</Link>
            <Link>Information Technology</Link>
          </div>
          <div className="footer-column">
            <NavLink to="/service">Resourses</NavLink>
            <Link to="/">About Us</Link>
            <Link>Testimonial</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of use </Link>
            <Link>Consulting</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="small">DLF Cybercity, Bhubaneswar, India, &52050</p>
          <div className="footer-middle_right">
            <img src={shapesLong} alt="" />
            <Link>Contact Us</Link>
            <img src={arrowBlack} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom_left">
            <img src={blackLogo} alt="" />
            <p className="large">©2021 Finsweet</p>
          </div>
          <nav>
            <Link>
              <img src={facebook} alt="" />
            </Link>
            <Link>
              <img src={twitter} alt="" />
            </Link>
            <Link>
              <img src={instagram} alt="" />
            </Link>
            <Link>
              <img src={linkedin} alt="" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
