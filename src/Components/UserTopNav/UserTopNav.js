import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { LogoutAuth } from '../../Actions/Auth';
import "./UserTopNav.css"
function UserTopNav(props) {
const [AccountDropDown,setAccountDropDown]=useState(false);
const [CurrentUser,setCurrentUser]=useState({firstname:"hedi",lastname:"karray",role:"admin"});

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
            <div className="account-picture"><img className="user-picture" src="https://www.atlassian.com/fr/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"></img> </div>
         
             
            
        </div> 
           <ul className={AccountDropDown? 'drop-down': "drop-down hidden"}>
           <li className="drop-down-choices">Mon profil</li>
           <li className="drop-down-choices">Déconnexion</li>
           <li className="drop-down-choices">Mon profil</li>
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
    return {};
    };
    
export default connect(mapStateToProps,mapDispatchProps)(UserTopNav) 
