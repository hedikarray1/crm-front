import React from "react";
import "./CustomButton.css";
function CustomButton(props) {
  return (
    <button
      type="submit"
      className="login_button button "
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

function CustomFormButton(props) {
  return (
    <button
      type="submit"
      className="button "
      style={{ width: props.width }}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

export { CustomButton, CustomFormButton };
