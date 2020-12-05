import React from "react";
import ReactDOM from "react-dom";
// React Router
import { BrowserRouter } from "react-router-dom";
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
