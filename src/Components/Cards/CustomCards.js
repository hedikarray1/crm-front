import React from 'react'
import "./CustomCards.css"
function CustomCards(props) {
    return (
        <div className="custom-card-container">
            {props.children}
        </div>
    )
}

export default CustomCards
