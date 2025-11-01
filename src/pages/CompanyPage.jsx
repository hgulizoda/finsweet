import groupOfPeople from "../assets/images/group.png";
import smilingGirl from "../assets/images/smilingGirl.png";
import groupOfWomen from "../assets/images/women.png";

const CompanyPage = () => {
  return (
    <main>
      <section
        className="company-hero container"
        style={{
          paddingTop: "96px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <p className="caption">Company</p>
          <h2
            style={{
              marginBlock: "20px 24px",
            }}
          >
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
        </div>
        <div
          className="images"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "64px",
          }}
        >
          <img src={groupOfPeople} alt="" style={{ width: "32.5%" }} />
          <img src={smilingGirl} alt="" style={{ width: "32.5%" }} />
          <img src={groupOfWomen} alt="" style={{ width: "32.5%" }} />
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
