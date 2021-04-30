import "../styles.css";
import Nav from "./Nav";
import content from "../services/content";

export default function Unit_four(props) {
  const unitContent = content.filterContent(props.lessons, "4");
  console.log(unitContent);

  return (
    <div className="unit-content">
      <Nav />
    </div>
  );
}
