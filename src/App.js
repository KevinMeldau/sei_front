// import { useState, useEffect } from "react";
import Content from "./components/Content";
import Content_member from "./components/Content_member";
import Unit_content_member from "./components/Unit_content_member";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Content />
      <Content_member />
      <Unit_content_member />
    </div>
  );
}
