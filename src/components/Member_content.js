import { Link } from "react-router-dom";
import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content_member() {
  return (
    <div className="content">
      <div className="nav">
        <div className="nav-items">
          <img src={companyLogo} alt="Company logo" />
        </div>
        <div className="login-container">
          <Link to="/">
            <button type="button">Log Out</button>
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
      <div className="unit-btn-container">
        <Link to="/unit_one">
          <button type="button">Unit 1</button>
        </Link>
        <Link to="/unit_two">
          <button type="button">Unit 2</button>
        </Link>
        <Link to="/unit_three">
          <button type="button">Unit 3</button>
        </Link>
        <Link to="/unit_four">
          <button type="button">Unit 4</button>
        </Link>
      </div>
    </div>
  );
}
