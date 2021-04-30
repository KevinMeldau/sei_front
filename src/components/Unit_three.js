import "../styles.css";
import Nav from "./Nav";
import nodejsLogo from "../images/nodejs_logo.svg";
import mongodbLogo from "../images/mongodb_logo.svg";
import reactLogo from "../images/react_logo.svg";
import expressLogo from "../images/express_logo.svg";
import content from "../services/content";

export default function Unit_three(props) {

  const unitContent = content.filterContent(props.lessons, "3");
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
          <img src={nodejsLogo} className="nodejs-logo" alt="Nodejs logo" />
          <img src={mongodbLogo} className="mongodb-logo" alt="Mongodb logo" />
          <img src={reactLogo} className="react-logo" alt="React logo" />
          <img src={expressLogo} className="express-logo" alt="Express logo" />
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
