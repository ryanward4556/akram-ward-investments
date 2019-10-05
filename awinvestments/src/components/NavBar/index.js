import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="row" id="navigation-bar">
      <div className="col-12">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Market News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
