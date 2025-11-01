import Button from "../components/Button";

import arrowBlack from "../assets/icons/arrowBlack.svg";
const ServicePage = () => {
  return (
    <main>
      <section
        className="service-hero"
        style={{
          backgroundColor: "#FFE6D2",
          paddingBlock: "96px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="service-hero_left"
            style={{
              width: "50%",
            }}
          >
            <p className="caption">Our Services</p>
            <h2
              style={{
                marginTop: "12px",
              }}
            >
              We Build Software Solutionthat Solve Clients Business Challenges
            </h2>
            <p
              className="paragraph"
              style={{
                color: "#232536",
                marginBlock: "24px 40px",
              }}
            >
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <Button />
          </div>
          <div
            className="servide-hero_right"
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: "column",
            }}
          >
            <h4>Technical support</h4>
            <h4>
              Development <img src={arrowBlack} alt="" />
            </h4>
            <h4>AWS/Azure </h4>
            <h4>Consulting</h4>
            <h4>Information Technology</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
