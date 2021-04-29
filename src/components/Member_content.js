import "../styles.css";
import Nav from "../components/Nav";

export default function Content_member() {
  return (
    <div className="content">
      <Nav />
      <div className="heading">
        <h1>
          A great <br />
          place for a heading
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="unit-btn-container">
        <button>Unit 1</button>
        <button>Unit 2</button>
        <button>Unit 3</button>
        <button>unit 4</button>
      </div>
    </div>
  );
}
