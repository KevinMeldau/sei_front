// import { useState, useEffect } from "react";
import Public_facing from "./components/Public_facing";
import Member_content from "./components/Member_content";
import Member_content_unit from "./components/Member_content_unit";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/member" component={Member_content} />
          <Route path="/unit" component={Member_content_unit} />
          <Route path="/" component={Public_facing} />
        </Switch>
      </div>
    </Router>
  );
}
