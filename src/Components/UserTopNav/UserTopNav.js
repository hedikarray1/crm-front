import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { LogoutAuth } from '../../Actions/Auth';
import { USER_PICTURE_URL } from '../../constants/BackendConstants';
import "./UserTopNav.css"
function UserTopNav(props) {
const [AccountDropDown,setAccountDropDown]=useState(false);
const [CurrentUser,setCurrentUser]=useState(props.current_user);

const history=useHistory();

    const showAccountDropDown=()=>{
       setAccountDropDown(!AccountDropDown);
      
    }
    return (
       <>
             <div className="account-component" onClick={()=>{
            
             showAccountDropDown();
            }}>
            
            <div className="username">
            {CurrentUser.firstname+" "+CurrentUser.lastname}
            </div>
            <div className="account-picture"><img className="user-picture-rounded" src={USER_PICTURE_URL+CurrentUser.picture}></img> </div>
         
             
            
        </div> 
           <ul className={AccountDropDown? 'drop-down': "drop-down hidden"}>
           <li className="drop-down-choices"  onClick={()=>{
             
           
             history.push("/home/profil");
             }}>Mon profil</li>
         
       
           <li className="drop-down-choices big"  onClick={()=>{
             
               props.logout()
               history.push("/login");
               }}>Déconnexion</li>
       </ul>
       </>
    )
}


const mapDispatchProps=(dispatch)=>{
    return {
        logout: ()=>{
   
    dispatch(LogoutAuth())
    }
    }
    };

    const mapStateToProps=(state)=>{
       // console.log("in state",state);
    return {current_user:state.Auth.current_user};
    };
    
export default connect(mapStateToProps,mapDispatchProps)(UserTopNav) 
