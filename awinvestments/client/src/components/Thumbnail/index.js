import React from "react";
import "./style.css";

function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
        backgroundImage: `url(${src})`,
        position: "absolute",
        top: "0",
        bottom: "0",
        margin: "auto",
        marginLeft: "1rem !important",
        height: "185px",
        width: "185px",
        borderStyle: "ridge",
        borderWidth: "2px",
        borderColor: "green"
      }}
    />
  );
}

export default Thumbnail;
