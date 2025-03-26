import "./Nav.css"
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav1-div">
        <div class="circle"></div>
        <h1>Khushboo</h1>
      </div>
      <div className="nav2-div">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
 
      </ul>
      </div>
    </nav>
  );
}

export default Nav;

