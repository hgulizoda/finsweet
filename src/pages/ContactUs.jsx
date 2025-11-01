import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";

import Button from "../components/Button";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <main>
      <section
        className="contact-hero container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBlock: "96px",
        }}
      >
        <div
          className="contact-left"
          style={{
            width: "45%",
          }}
        >
          <p className="caption">CONTACT US</p>
          <h2
            style={{
              marginBlock: "24px",
            }}
          >
            Have a Question ? Let’s Get in Touch with us 👋
          </h2>
          <p className="paragraph">
            Fill up the Form and ou team will get back to within 24 hrs
          </p>
          <form className="contact-hero_form">
            <div
              className="input-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name..." id="name" />
            </div>
            <div
              className="input-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name">Email</label>
              <input type="text" placeholder="Enter your email..." id="name" />
            </div>
            <div
              className="input-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name">Subject</label>
              <input type="text" placeholder="Enter the subject..." id="name" />
            </div>
            <div
              className="input-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name">Message</label>
              <textarea placeholder="Type your message..." id="name" />
            </div>
            <Button text="Send Message" />
          </form>
        </div>

        <div className="contact-right">
          <div className="block">
            <p className="small">Location</p>
            <p className="large">DLF Cybercity, Bhubaneswar, India, &52050</p>
          </div>
          <div className="block">
            <p className="small">Working Hour</p>
            <p className="large">
              Monday To Friday <br />
              9:00 AM to 8:00 PM{" "}
            </p>
            <p className="small">Our Support Team is available 24Hrs</p>
          </div>
          <div className="block">
            <p className="small">Contact Us</p>
            <p className="large">020 7993 2905</p>
            <p className="small">Hello@ether.com</p>
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
      </section>
    </main>
  );
};

export default ContactUs;
