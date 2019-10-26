import React from "react";


var inputStyle = {
  marginTop: "0 !important",
  paddingTop: "0 !important"
}


function Input(props) {
  return (
    <div className="input-group input-group-sm">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;
