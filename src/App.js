// import { useState, useEffect } from "react";
import Public_facing from "./components/Public_facing";
import Form from "./components/Form";
import Member_content from "./components/Member_content";
import Unit_one from "./components/Unit_one";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/member" component={Member_content} />
          <Route path="/form" component={Form} />
          <Route path="/unit" component={Unit_one} />
          <Route path="/" component={Public_facing} />
        </Switch>
      </div>
    </Router>
  );
}
