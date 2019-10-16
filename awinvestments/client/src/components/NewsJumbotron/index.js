import React from "react";
import "./style.css";

var marketNews = {
  color: "green",
  fontFamily: "Orbitron",
}

var pStyle = {
  fontFamily: "Orbitron",
  fontSize: "18px",
  paddingTop: "1.5rem"
}

function NewsJumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1 style={marketNews}>Market News</h1>
      <p className="text-center" style={pStyle}>Enter a Company's Stock Symbol Below to Get The Latest News!</p>
    </div>
  );
}

export default NewsJumbotron;
