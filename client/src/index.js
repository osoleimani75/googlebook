import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
import App from "./App";

ReactDOM.render(
    <Router>
        <div>
            <div className="background"></div>
            <App />
        </div>
    </Router>,
     document.getElementById("root")
);
