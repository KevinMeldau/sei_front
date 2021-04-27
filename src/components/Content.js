import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Content() {
  return (
    <div className="content">
      <img src={companyLogo} alt="Logo image" />
    </div>
  );
}
