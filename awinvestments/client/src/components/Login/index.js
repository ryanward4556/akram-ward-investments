import React from "react";
import "./style.css";

function Login(props) {
  return (
    <div className="row">
      <div className="col-8 offset-2">
        <form>
          <input type="text" value={props.username} onChange={props.handleInputChange}></input>
          <br />
          <input type="text" value={props.password} onChange={props.handleInputChange}></input>
          <br />
          <button className="btn btn-primary" type="button"> onClick={props.onClick}</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
