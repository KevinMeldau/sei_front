import "../styles.css";
import companyLogo from "../images/sei_logo.png";
import htmlLogo from "../images/html5_logo.svg";
import cssLogo from "../images/css3_logo.svg";
import javascriptLogo from "../images/javascript_logo.svg";
import sassLogo from "../images/sass_logo.svg";

export default function Unit_content_member() {
  return (
    <div className="unit-content">
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
      <div className="tech-icons-container">
        <div className="unit-heading">
          <h2>Heading</h2>
          <h3>This is a great place for a sub-head</h3>
        </div>
        <div className="tech-icons">
          <img src={htmlLogo} className="html-logo" alt="HTML logo" />
          <img src={cssLogo} className="css-logo" alt="CSS logo" />
          <img src={javascriptLogo} className="js-logo" alt="Javascript logo" />
          <img src={sassLogo} className="sass-logo" alt="Sass logo" />
        </div>
      </div>
    </div>
  );
}
