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
  const [lessonsState, setLessonsState] = useState({ notices: []});
  
  //state for holding lessons
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getLessons() {
      try {
        //assigns json data to variable
        let lessons = await fetch("http://localhost:3000/lessons")
        .then(res => res.json());
        
        //sets content state to variable lessons
        setContent(lessons);
      } catch(err) {
        console.log(err)
      }
    }

    getLessons();
  });
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/member" component={Member_content} />
          <Route path="/form" component={Form} />
          <Route path="/unit_one" component={Unit_one} lessons={content} />
          <Route path="/unit_two" component={Unit_two} lessons={content}/>
          <Route path="/unit_three" component={Unit_three} lessons={content}/>
          <Route path="/unit_four" component={Unit_four} lessons={content}/>
          <Route path="/" component={Public_facing} />
        </Switch>
      </div>
    </Router>
  );
}
