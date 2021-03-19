import React from 'react'
import "./NotFound.css"
import BACKGROUND from "../../assets/pictures/login_background_blurred.png";
import LOGO_ILIS from "../../assets/pictures/logo-ilis.svg";
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router';

function NotFound() {
    const history = useHistory();

    return (
        <div className="my-page-container">
        <img src={BACKGROUND} className="background-picture" ></img>
     
            <img src={LOGO_ILIS} className="logo-picture"  onClick={()=>{
           history.push("/login")
         }}></img>
            <p className="not-found-number">404</p>
            <p className="not-found-description">Désolé, la page que vous cherchez est introuvable</p>
        </div>
    )
}

export default NotFound
