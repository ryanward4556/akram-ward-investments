import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="row" id="navigation-bar">
      <div className="col-12">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/market-news">Market News</a></li>
          <li><a href="login">Client Accounts</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
