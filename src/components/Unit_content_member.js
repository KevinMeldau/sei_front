import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Unit_content_member() {
  return (
    <div className="unit-content">
      <div className="nav">
        <div className="nav-items">
          <img src={companyLogo} alt="Logo image" />
          <a href="#">About</a>
          <a href="#">Stories</a>
          <a href="#">Pricing</a>
        </div>
        <div className="login-container">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
