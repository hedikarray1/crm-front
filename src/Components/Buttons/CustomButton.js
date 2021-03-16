import React from 'react'
import "./CustomButton.css"
function CustomButton(props) {
    return (
        <button  type="submit" className="login_button button " onClick={()=>{props.onClick();}} >{props.value}</button>   
         );
}

export default CustomButton
