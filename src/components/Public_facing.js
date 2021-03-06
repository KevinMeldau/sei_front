import { Link } from "react-router-dom";
import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content() {
  return (
    <div className="content">
      <div className="nav">
        <div className="nav-items">
          <Link to="/">
            <img src={companyLogo} alt="Logo image" />
          </Link>
        </div>
        <div className="login-container">
          <Link to="/member_content">
            <button type="button">Login</button>
          </Link>
        </div>
      </div>
      <div className="heading">
        <h1>
          A great <br />
          place for a heading
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  );
}
