import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import LogoList from "../components/LogoList";

import heroImage from "../assets/images/Header Image.png";

const Home = () => {
  return (
    <main>
      <section
        className="home-hero"
        style={{
          backgroundColor: "#232536",
          paddingBlock: "96px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "93px",
          }}
          className="home-hero_top container"
        >
          <div className="position"></div>
          <div
            className="hero_left"
            style={{
              width: "55%",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                color: "white",
              }}
            >
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="paragraph">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <Button />
          </div>
          <img
            src={heroImage}
            alt=""
            style={{
              width: "45%",
            }}
          />
        </div>

        <div
          className="hero-bottom container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p className="paragraph">Our Clients</p>
            <p
              className="large"
              style={{
                color: "#FFFFFF",
              }}
            >
              We've Worked with
            </p>
          </div>
          <LogoList />
        </div>
      </section>
    </main>
  );
};

export default Home;
