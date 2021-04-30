import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import companyLogo from "../images/sei_logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={companyLogo} alt="Logo image" />
        <Link to="/unit_one">Unit 1</Link>
        <Link to="/unit_two">Unit 2</Link>
        <Link to="/unit_three">Unit 3</Link>
        <Link to="/unit_four">Unit 4</Link>
      </div>
      <div className="login-container">
        <button>UPLOAD</button>
        <button>LOGIN</button>
      </div>
    </div>
  );
}
