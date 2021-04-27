<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import content from "./services/content";

function App() {

  useEffect(() => {
    //call getContent
    content.getContent();
  }, [])

=======
// import { useState, useEffect } from "react";
import Container from "./components/Container";

import "./styles.css";

export default function App() {
>>>>>>> km/styling
  return (
    <div className="container">
      <Container />
    </div>
  );
}
