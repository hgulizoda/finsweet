import group from "../assets/images/backImg.png";

const CareerPage = () => {
  return (
    <main>
      <section
        className="career-hero container "
        style={{
          textAlign: "center",
          paddingBlock: "90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="caption">CAREER AT FINSWEET</p>
        <h2 style={{ width: "50%", marginBlock: "24px" }}>
          We hired people who are Always Passionate about what they do
        </h2>
        <p className="paragraph" style={{ width: "60%" }}>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          .
        </p>
        <div
          style={{
            fontSize: "220px",
            fontWeight: "900",
            backgroundImage: `url(${group})`,
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Careers
        </div>
      </section>
    </main>
  );
};

export default CareerPage;
