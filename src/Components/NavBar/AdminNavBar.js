import React, { useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import "./AdminNavBar.css";
import * as IoiIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import AddClient from "../../Pages/AdminPages/CLientsManagment/AddClient/AddClient";
import Login from "../../Pages/Login";
import AllCompanyPage from "../../Pages/CompanyPages/AllCompanyPage/AllCompanyPage";
import AddCompanyPage from "../../Pages/CompanyPages/AddCompanyPage/AddCompanyPage";
function AdminNavBar() {
  const [AdminSideBar, setAdminSideBar] = useState(false);
  const showSideBar = () => {
    setAdminSideBar(!AdminSideBar);
  };

  return (
    <div>
      <div className="top-bar-menu">
        <Link to="#" className="">
          <IoiIcons.IoIosMenu
            size="25"
            className="toggle_menu_sidebar"
            onClick={() => {
              showSideBar();
            }}
          ></IoiIcons.IoIosMenu>
        </Link>
      </div>

      <nav className={AdminSideBar ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li className="menu-bars-item">
            <Link to="/home/addClient" className="menu-bars">
              <GiIcons.GiFactory />
              <span>addClient</span>
            </Link>
          </li>
          <li className="menu-bars-item">
            <Link to="/home/login" className="menu-bars">
              <GiIcons.GiFactory />
              <span>login</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/AllCompany" className="menu-bars">
              <GiIcons.GiFactory />
              <span>Gestion des sociétés</span>
            </Link>
          </li>
          <li className="menu-bars-item">
            <Link to="/home/AddCompanyPage" className="menu-bars">
              <GiIcons.GiFactory />
              <span>ajouter une sociétés</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={AdminSideBar ? "pages-content" : "pages-content hiddenslide"}
      >
        <Switch>
          <Route path="/home/addClient" component={AddClient}></Route>
          <Route path="/home/login" component={Login}></Route>
          <Route path="/home/AllCompany" component={AllCompanyPage}></Route>
          <Route path="/home/AddCompanyPage" component={AddCompanyPage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminNavBar;
