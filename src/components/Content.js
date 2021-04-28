import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content() {
  return (
    <div className="content">
      <div className="nav">
        <div className="nav-items">
          <img src={companyLogo} alt="Company logo" />
          <a href="#">About</a>
          <a href="#">Stories</a>
          <a href="#">Pricing</a>
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
