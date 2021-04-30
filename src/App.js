import { useState, useEffect } from "react";
import Public_facing from "./components/Public_facing";
import Form from "./components/Form";
import Member_content from "./components/Member_content";
import Unit_one from "./components/Unit_one";
import Unit_two from "./components/Unit_two";
import Unit_three from "./components/Unit_three";
import Unit_four from "./components/Unit_four";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [lessonsState, setLessonsState] = useState({ notices: [] });

  useEffect(() => {
    function getLessons() {
      fetch("http://localhost:3000/lessons")
        .then((res) => res.json())
        .then((data) => console.log("data: ", data))
        .catch((error) => console.error(error));
    }

    getLessons();
  });
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/member_content" component={Member_content} />
          <Route path="/form" component={Form} />
          <Route path="/unit_one" component={Unit_one} />
          <Route path="/unit_two" component={Unit_two} />
          <Route path="/unit_three" component={Unit_three} />
          <Route path="/unit_four" component={Unit_four} />
          <Route path="/" component={Public_facing} />
        </Switch>
      </div>
    </Router>
  );
}
