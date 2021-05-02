import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {login, logout, auth } from "./services/firebase";

import "./styles.css";

import Public_facing from "./components/Public_facing";
import Form from "./components/Form";
import Member_content from "./components/Member_content";
import Header from "./components/Header"
import Unit_one from "./components/Unit_one";
import Unit_two from "./components/Unit_two";
import Unit_three from "./components/Unit_three";
import Unit_four from "./components/Unit_four";
import External_resources from "./components/External_resources";


export default function App() {
  //state for holding lessons
  const [content, setContent] = useState([]);
  
  const [state, setState] = useState({
    user:null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        setState(prevState => ({
          ...prevState,
          user,
        }));
    });

    async function getLessons() {
      try {
        let lessons = await fetch("https://sei-resource-manager.herokuapp.com/lessons").then((res) =>
          res.json());
          setState((prevState) =>({
            ...prevState,
          }));

        console.log;
        setContent(lessons);
      } catch (err) {
        console.log(err);
      }
    }

    getLessons();
  }, []);
  return (
    <Router>
      <div>
        <Header />
      </div>
    <main>
      <div className="container">
        <Switch>
          <Route path="/member_content" component={Member_content} />
          <Route path="/form" component={Form} />
          <Route
            path="/unit_one"
            component={() => <Unit_one lessons={content} />}
          />
          <Route
            path="/unit_two"
            component={() => <Unit_two lessons={content} />}
          />
          <Route
            path="/unit_three"
            component={() => <Unit_three lessons={content} />}
          />
          <Route
            path="/unit_four"
            component={() => <Unit_four lessons={content} />}
          />
          <Route
            path="/external_resources"
            component={() => <External_resources lessons={content} />}
          />
          <Route path="/" component={Public_facing} />
        </Switch>
      </div>
    </main>
    </Router>
  );
}
