import "../styles.css";
import Nav from "./Nav";
import htmlLogo from "../images/html5_logo.svg";
import cssLogo from "../images/css3_logo.svg";
import javascriptLogo from "../images/javascript_logo.svg";
import sassLogo from "../images/sass_logo.svg";
import content from "../services/content";

export default function Unit_four(props) {
  const unitContent = content.filterContent(props.lessons, "5");
  console.log(unitContent);

  return (
    <div className="unit-content">
      <Nav />
      <div className="tech-icons-container">
        <div className="unit-heading">
          <h2>
            {unitContent.map((unitContent) => (
              <div>
                {unitContent.title}
                <button onClick={(e) => {
                  content.editContent(unitContent);
                }}>Edit</button>
                <button onClick={(e) => {
                  content.deleteContent(unitContent);
                }}>Delete</button>
              </div>
            ))}
          </h2>
          <h3>
            {unitContent.map((unitContent) => (
              <div>{unitContent.subject}</div>
            ))}
          </h3>
        </div>

        <div className="tech-icons">
          <img src={htmlLogo} className="html-logo" alt="HTML logo" />
          <img src={cssLogo} className="css-logo" alt="CSS logo" />
          <img src={javascriptLogo} className="js-logo" alt="Javascript logo" />
          <img src={sassLogo} className="sass-logo" alt="Sass logo" />
        </div>
      </div>
      <div className="lesson-description">
        <div className="current-lesson">
          {unitContent.map((unitContent) => (
            <div>{unitContent.unit}</div>
          ))}
        </div>
        
        <div>
          {unitContent.map((unitContent) => (
            <div>{unitContent.videoLink}</div>
          ))}
        </div>
        <div>
        {unitContent.map((unitContent) => (
            <div>{unitContent.markdownLink}</div>
          ))}
        </div>
        <div>
        {unitContent.map((unitContent) => (
            <div>{unitContent.resourceLink}</div>
          ))}
        </div>
        <div>
          {unitContent.map((unitContent) => (
            <div>{unitContent.tags}</div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
