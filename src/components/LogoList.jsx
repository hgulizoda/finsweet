import logoIpsum from "../assets/icons/logoipsum.svg";
const LogoList = () => {
  return (
    <div
      className="logo-list"
      style={{
        display: "flex",
        gap: "32px",
      }}
    >
      <img src={logoIpsum} alt="" />
      <img src={logoIpsum} alt="" />
      <img src={logoIpsum} alt="" />
      <img src={logoIpsum} alt="" />
      <img src={logoIpsum} alt="" />
    </div>
  );
};

export default LogoList;
