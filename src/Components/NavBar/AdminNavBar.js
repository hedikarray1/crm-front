import React, { useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import "./AdminNavBar.css";
import * as IoiIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import UserTopNav from "../UserTopNav/UserTopNav";

import CustomersList from "../../Pages/CustomersPages/CustomersList/CustomersList";
import CategoryList from "../../Pages/CategoryPages/CategoryList/CategoryList";
import AddClient from "../../Pages/AdminPages/CLientsManagment/AddClient/AddClient";
import Login from "../../Pages/PublicPages/LoginPage/Login";
import AllCompanyPage from "../../Pages/AdminPages/CompanyPages/AllCompanyPage/AllCompanyPage";
import AddCompanyPage from "../../Pages/AdminPages/CompanyPages/AddCompanyPage/AddCompanyPage";
import AddFeaturePage from "../../Pages/AdminPages/FeaturePages/AddFeaturePage/AddFeaturePage";
import AddPack from "../../Pages/AdminPages/PackPages/AddPack/AddPack";
import AllPackPage from "../../Pages/AdminPages/PackPages/AllPackPage/AllPackPage";
import AddLicencePage from "../../Pages/AdminPages/LicencePages/AddLicencePage/AddLicencePage";
import AllFeaturePage from "../../Pages/AdminPages/FeaturePages/AllFeaturePage/AllFeaturePage";
import Profile from "../../Pages/PublicPages/ProfilePage/Profile";
import AddProductPage from "../../Pages/ClientPages/ProductPages/AddProductPage/AddProductPage";
import AllProductsPage from "../../Pages/ClientPages/ProductPages/AllProductsPage/AllProductsPage";
import DetailProductPage from "../../Pages/ClientPages/ProductPages/DetailProductPage/DetailProductPage";

function AdminNavBar() {
  const [AdminSideBar, setAdminSideBar] = useState(false);
  const showSideBar = () => {
    setAdminSideBar(!AdminSideBar);
  };

  return (
    <div style={{ overflow: "scroll" }}>
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
            <Link to="/home/AddPack" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AddPack</span>
            </Link>
          </li>
          <li className="menu-bars-item">
            <Link to="/home/AddProductPage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>Add Product</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/AllProductsPage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>All Products</span>
            </Link>
          </li>

          <li className="menu-bars-item">
            <Link to="/home/AllFeaturePage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AllFeaturePage</span>
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
            <Link to="/home/AllPack" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AllPack</span>
            </Link>
          </li>

          <li>
            <Link to="/home/AddLicencePage" className="menu-bars">
              <GiIcons.GiFactory size="40" className="item-icon" />
              <span>AddLicencePage</span>
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
          <Route path="/home/AllPack" component={AllPackPage}></Route>

          <Route path="/home/AddLicencePage" component={AddLicencePage}></Route>
          <Route path="/home/AllFeaturePage" component={AllFeaturePage}></Route>
          <Route path="/home/profil" component={Profile}></Route>
          <Route path="/home/customers" component={CustomersList}></Route>
          <Route path="/home/categories" component={CategoryList}></Route>
          <Route path="/home/AddProductPage" component={AddProductPage}></Route>
          <Route
            path="/home/DetailProductPage"
            component={DetailProductPage}
          ></Route>
          <Route
            path="/home/AllProductsPage"
            component={AllProductsPage}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminNavBar;
