import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng ReactDOM.createRoot trong React 18
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
