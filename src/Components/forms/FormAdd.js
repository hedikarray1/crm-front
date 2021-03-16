import React from 'react'
import "./FormAdd.css"
function FormAdd(props) {
    return (
        <div className="form-content">
            <p>{props.Title}</p>
        {props.FormContent.map((item,index)=>{
            return(item);
        })}
        </div>
    )
}

export default FormAdd;
