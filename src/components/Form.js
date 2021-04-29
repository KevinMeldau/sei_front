import "../styles.css";
import Nav from "./Nav";
import htmlLogo from "../images/html5_logo.svg";
import cssLogo from "../images/css3_logo.svg";
import javascriptLogo from "../images/javascript_logo.svg";
import sassLogo from "../images/sass_logo.svg";

export default function Form() {
  return (
    <div className="unit-content">
      <Nav />
      <form id="newContent" className="form">
        <input type="text" placeholder="Title" name="title" id="" />
        <input type="text" placeholder="Subject" name="subject" id="" />
        <input type="text" placeholder="Unit" name="unit" id="" />
        <input type="text" placeholder="Video Link" name="videoLink" id="" />
        <input
          type="text"
          placeholder="Markdown Link"
          name="markdownLink"
          id=""
        />
        <input
          type="text"
          placeholder="Resource Links"
          name="resourceLinks"
          id=""
        />
        <input type="text" placeholder="Tags" name="tags" id="" />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
}
