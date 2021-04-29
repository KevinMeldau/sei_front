// import { useState, useEffect } from "react";
import Public_facing from "./components/Public_facing";
import Member_content from "./components/Member_content";
import Member_content_unit from "./components/Member_content_unit";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Public_facing />
      <Member_content />
      <Member_content_unit />
    </div>
  );
}
