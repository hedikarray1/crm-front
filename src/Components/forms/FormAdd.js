import React from "react";
import "./FormAdd.css";
function FormAdd(props) {
  const className = "form-content " + props.className;
  return (
    <div className={className}>
      <p>{props.Title}</p>
      {props.children}
    </div>
  );
}

export default FormAdd;
