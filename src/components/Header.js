import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";
import companyLogo from "../images/sei_logo.png";

import { login, logout } from "../services/firebase";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-items">
        <Link to="/">
          <img src={companyLogo} alt="Logo image" />
        </Link>
        <Link to="/unit_one">Unit 1</Link>
        <Link to="/unit_two">Unit 2</Link>
        <Link to="/unit_three">Unit 3</Link>
        <Link to="/unit_four">Unit 4</Link>
        <Link to="/external_Resources">External Resources</Link>
      </div>
      <div className="login-container">
        <Link to="/form">
          <button type="button">Upload</button>
        </Link>
          <ul>
              
              <li>Welcome,</li>
              <li onClick={login}>Login</li>
              <li onClick={logout}>Logout</li>
          </ul>
      </div>
    </div>
  );
}