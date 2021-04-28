import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import member_content_unit from "./member_content_unit";
// import member_content from "./member_content";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// member_content_unit();
// member_content();
