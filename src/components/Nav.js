import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={companyLogo} alt="Logo image" />
        <a href="#">Unit 1</a>
        <a href="#">Unit 2</a>
        <a href="#">Unit 3</a>
        <a href="#">Unit 4</a>
        {/* <p>TEST</p> */}
      </div>
      <div className="login-container">
        <button>LOGIN</button>
      </div>
    </div>
  );
}
