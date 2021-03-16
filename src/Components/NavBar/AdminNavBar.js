import React, { useState } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import "./AdminNavBar.css";
import * as IoiIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import AddClient from '../../Pages/AdminPages/CLientsManagment/AddClient/AddClient';
import Login from '../../Pages/Login';
import UserTopNav from '../UserTopNav/UserTopNav';
function AdminNavBar() {
    const [AdminSideBar,setAdminSideBar]=useState(false);
    const showSideBar=()=>{
        setAdminSideBar(!AdminSideBar);
    }
  

    return (
        <div>
           <div className="top-bar-menu">
           <Link to="#" className="" >
<IoiIcons.IoIosMenu size="25" className="toggle_menu_sidebar" onClick={()=>{showSideBar();}}></IoiIcons.IoIosMenu>
           </Link>
         <UserTopNav></UserTopNav>
           </div> 
           

<nav className={AdminSideBar? 'nav-menu active':'nav-menu'}>
<ul className="menu-bars-ul">
  
    <li className="menu-bars-item">
        <Link to="/home/addClient" className="menu-bars" >
        <GiIcons.GiFactory size="40" className="item-icon" />
        <span>Sociétés</span>
        </Link>
    </li>
    <li className="menu-bars-item">
        <Link to="/home/login" className="menu-bars" >
        <GiIcons.GiFactory size="40" className="item-icon" />        <span>Utilisateurs</span>
        </Link>
    </li>
</ul>
</nav>
<div className={AdminSideBar? 'pages-content':'pages-content hiddenslide'}>
   
   <Switch>
    
     <Route path="/home/addClient" component={AddClient}></Route>
     <Route path="/home/login" component={Login}></Route>

  
   </Switch>

</div>
        </div>
    )
}

export default AdminNavBar
