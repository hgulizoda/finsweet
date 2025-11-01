import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "./../assets/icons/logo.svg";
import arrow from "../assets/icons/arrow.svg";
const Header = () => {
  const navigate = useNavigate();
  function logoNavigate() {
    navigate("/");
  }
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" onClick={logoNavigate} />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <NavLink>
            Clone Project <img src={arrow} alt="" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
