import React, { useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import "./AdminNavBar.css";
import * as IoiIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import AddClient from "../../Pages/AdminPages/CLientsManagment/AddClient/AddClient";
import Login from "../../Pages/Login";
import UserTopNav from "../UserTopNav/UserTopNav";
import AllCompanyPage from "../../Pages/CompanyPages/AllCompanyPage/AllCompanyPage";
import AddCompanyPage from "../../Pages/CompanyPages/AddCompanyPage/AddCompanyPage";
import AddFeaturePage from "../../Pages/FeaturePages/AddFeaturePage/AddFeaturePage";
import AddPack from "../../Pages/PackPages/AddPack/AddPack";
import Profile from "../../Pages/ProfilePage/Profile";
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
        <UserTopNav></UserTopNav>
      </div>

      <nav className={AdminSideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="menu-bars-ul">
          <li className="menu-bars-item">
            <Link to="/home/addClient" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>Clients</span>
            </Link>
          </li>
          <li className="menu-bars-item">
            <Link to="/home/AllCompany" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>Sociétés</span>
            </Link>
          </li>
          <li className="menu-bars-item">
            <Link to="/home/AddCompanyPage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>add Sociétés</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/AddFeaturePage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AddFeaturePage</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/AddPack" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AddPack</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/login" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />{" "}
              <span>login</span>
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
          <Route path="/home/AddFeaturePage" component={AddFeaturePage}></Route>
          <Route path="/home/AddPack" component={AddPack}></Route>
          <Route path="/home/profil"  component={Profile}></Route>
        

        </Switch>
      </div>
    </div>
  );
}

export default AdminNavBar;
