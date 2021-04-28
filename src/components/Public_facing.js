import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content() {
  return (
    <div className="content">
      <div className="nav">
        <div className="nav-items">
          <img src={companyLogo} alt="Company logo" />
          <a href="#" className="hide">
            Unit 1
          </a>
          <a href="#" className="hide">
            Unit 2
          </a>
          <a href="#" className="hide">
            Unit 3
          </a>
          <a href="#" className="hide">
            Unit 4
          </a>
        </div>
        <div className="login-container">
          <button>LOGIN</button>
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
