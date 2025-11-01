import shape from "../assets/icons/Shapes.svg";
import arrow from "../assets/icons/arrow.svg";
const Button = ({ text }) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 32px",
        backgroundColor: "#444CFC",
        border: "none",
        gap: "16px",
        fontSize: "16px",
        color: "white",
        position: "relative",
      }}
    >
      <img
        src={shape}
        alt=""
        style={{
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      {text ? text : "Request A Quote"}
      <img src={arrow} alt="" />
    </button>
  );
};

export default Button;
