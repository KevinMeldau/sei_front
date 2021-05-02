import "../styles.css";
import Nav from "./Nav";
import contentServices from "../services/content";

export default function Form(props) {
  // console.log(props.location.state);
  return (
    <div className="unit-content">
      <Nav />
      <form id="newContent" className="form" onSubmit={(e) => {
                e.preventDefault();
                contentServices.addContent();
            }}>
        <input type="text" placeholder={props.location.state.content.title || "Title"} name="title" id="" />
        <input type="text" placeholder={props.location.state.content.subject || "Subject"} name="subject" id="" />
        <input type="text" placeholder={props.location.state.content.videoLink || "Video Link"} name="videoLink" id="" />
        <input
          type="text"
          placeholder={props.location.state.content.markdownLink || "Markdown Link"}
          name="markdownLink"
          id=""
        />
        <input
          type="text"
          placeholder={props.location.state.content.resourceLinks[0] || "Resource Links"}
          name="resourceLinks"
          id=""
        />
        <input type="text" placeholder={props.location.state.content.tags[0] || "Tags"} name="tags" id="" />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
}
