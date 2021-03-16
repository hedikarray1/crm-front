import React, { useState } from 'react'
import './Login.css'
import Logo from "../assets/pictures/logo-ilis.svg"
function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
    return (
        <div className="login">
         <div className="login_container">

         <div className="login_side">
             <div className="login_side_data" >
                <img className="login_side_data_picture" src={Logo} />
                 <p className="login_side_slogan">salut sqfq  sqfsqf qs dsqsq qsdfsqf qssq f salut sqfq  sqfsqf qs dsqsq qsdfsqf qssq f salut sqfq  sqfsqf qs dsqsq qsdfsqf qssq f </p>
                 
             </div>
         </div>
            <div className="login_form">
                <label className="label_form_title" >Se connecter</label>
                <label className="label_field_indicator" >Adresse électronique:</label>
                <input type="email" className="form-control" value={email} placeholder="Adresse électronique" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label className="label_field_indicator" >Mot de passe:</label>
                <input type="password" className="form-control"  value={password} placeholder="Mot de passe" onChange={(e)=>{setPassword(e.target.value)}} ></input>
                <button type="submit" className="login_button" >Se connecter</button>
            </div>
         </div>
        </div>
    )
}

export default Login
