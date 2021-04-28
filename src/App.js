import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import content from "./services/content";

import Testing from "./components/Testing/Testing";

function App() {

  useEffect(() => {
    //get content from backend
    content.getContent();

    //set state to show content
  }, []);

  const [tags, setTags] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Testing func={content.addContent}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
