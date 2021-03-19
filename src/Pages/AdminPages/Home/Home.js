import React from "react";
import { connect } from "react-redux";
import AdminNavBar from "../../../Components/NavBar/AdminNavBar";
import NotFound from "../../NotFoundPage/NotFound";

function Home(props) {
 
  return (
    <div>
  {props.Auth.isLoggedIn?  <AdminNavBar />:<NotFound></NotFound>}     
    </div>
  );
}



const mapStateToProps = (state) => {
 return state;
};


export default connect(mapStateToProps)(Home);


