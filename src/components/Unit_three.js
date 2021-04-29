import "../styles.css";
import Nav from "./Nav";
import htmlLogo from "../images/html5_logo.svg";
import cssLogo from "../images/css3_logo.svg";
import javascriptLogo from "../images/javascript_logo.svg";
import sassLogo from "../images/sass_logo.svg";

export default function Unit_three() {
  return (
    <div className="unit-content">
      <Nav />
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
      <div className="lesson-description">
        <p className="current-lesson">03</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr />
    </div>
  );
}
