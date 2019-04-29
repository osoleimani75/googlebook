import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (


    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/"> Google Books Search</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
            <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">saved</a>
        </li>
        </ul>
    </div>
    </nav>

</React.Fragment>

  );
};

export default NavBar;
