import "../styles.css";
import Nav from "./Nav";
import javascriptLogo from "../images/javascript_logo.svg";
import reactLogo from "../images/react_logo.svg";
import ruby_on_railsLogo from "../images/ruby_on_rails_logo.svg";
import sassLogo from "../images/sass_logo.svg";
import content from "../services/content";

export default function Unit_four(props) {

  const unitContent = content.filterContent(props.lessons, "4");
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
          {/* <img src={javascriptLogo} className="js-logo" alt="Javascript logo" /> */}
          <img src={reactLogo} className="react-logo" alt="react logo" />
          <img src={ruby_on_railsLogo} className="ruby_on_rails-logo" alt="ruby_on_rails logo" />
          {/* <img src={sassLogo} className="sass-logo" alt="Sass logo" /> */}
        </div>
      </div>
      <div className="lesson-description">
        <p className="current-lesson">04</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr />
    </div>
  );
}
