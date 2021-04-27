import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content() {
  return (
    <div className="content">
      <div className="nav">
        <img src={companyLogo} alt="Logo image" />
      </div>
    </div>
  );
}
