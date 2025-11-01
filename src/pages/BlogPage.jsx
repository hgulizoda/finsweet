import Button from "../components/Button";
import Portfolio from "../assets/images/portfolio.png";

const BlogPage = () => {
  return (
    <main>
      <section
        className="blog-hero container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBlock: "96px",
        }}
      >
        <div
          className="blog-hero_left"
          style={{
            width: "50%",
          }}
        >
          <p className="caption">TREnding</p>
          <h2
            style={{
              marginBlock: "24px",
            }}
          >
            Breaking the code How did we build our Figma plugin{" "}
          </h2>
          <p
            className="paragraph"
            style={{
              marginBottom: "24px",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the.
          </p>
          <Button />
        </div>
        <div
          className="blog-hero_right"
          style={{
            width: "40%",
            backgroundColor: "#FFDFC6",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            padding: "72px",
          }}
        >
          <div className="box">
            <h4>
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div
              className="profile"
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <img src={Portfolio} alt="" />
              <div className="name">
                <p className="paragraph">Andrew Jonson</p>
                <p className="small">Jan 19, 2021</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h4>
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div
              className="profile"
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <img src={Portfolio} alt="" />
              <div className="name">
                <p className="paragraph">Andrew Jonson</p>
                <p className="small">Jan 19, 2021</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h4>
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div
              className="profile"
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <img src={Portfolio} alt="" />
              <div className="name">
                <p className="paragraph">Andrew Jonson</p>
                <p className="small">Jan 19, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
