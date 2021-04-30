import "../styles.css";
import Nav from "./Nav";
import expressLogo from "../images/express_logo.svg";
import nodejsLogo from "../images/nodejs_logo.svg";
import mongodbLogo from "../images/mongodb_logo.svg";
import sassLogo from "../images/sass_logo.svg";
import content from "../services/content";

export default function Unit_two(props) {

  const unitContent = content.filterContent(props.lessons, "2");
  console.log(unitContent);

  return (
    <div className="unit-content">
      <Nav />
      <div className="tech-icons-container">
        <div className="unit-heading">
          <h2>Heading</h2>
          <h3>This is a great place for a sub-head</h3>
        </div>
        <div className="tech-icons">
          <img src={expressLogo} className="express-logo" alt="Express logo" />
          <img src={nodejsLogo} className="nodejs-logo" alt="NODEJS logo" />
          <img src={mongodbLogo} className="mongodb-logo" alt="Mongodb logo" />
          {/* <img src={sassLogo} className="sass-logo" alt="Sass logo" /> */}
        </div>
      </div>
      <div className="lesson-description">
        <p className="current-lesson">02</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr />
    </div>
  );
}
