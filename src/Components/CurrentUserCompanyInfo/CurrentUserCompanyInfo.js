import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import CustomCards from '../Cards/CustomCards'
import "./CurrentUserCompanyInfo.css"
import NoContent from "../../assets/pictures/bad-review.svg"
import {getMyCompany} from "../../Actions/Company"

function CurrentUserCompanyInfo(props) {
const {token,user}=props;
const [MyCompany,setMyCompany]=useState(props.my_company)
//const role=props.user.current_user.role;
useEffect(() => {
    props.getMyCompany(token);
    
  }, []);

    return (
        <div className="current-page">
{props.my_company!=null?<CustomCards>
<div className="my-company-infos">
    <img></img>
</div>
</CustomCards>:<CustomCards>
    <img className="no-content-picture" src={NoContent}></img>
<p className="no-content-text"> Vous n'appartenez à aucune société... </p>
</CustomCards>}
</div>
    )
}

const mapStateToProps = (state) => {
    // console.log("in state",state);
    return { user: state.Auth.current_user,token: state.Auth.Authorization,my_company:state.Company.my_company };
};


const mapDispatchProps = (dispatch) => {
    return {
        getMyCompany:(token)=>{
            dispatch(getMyCompany(token))
        }
    }

};


export default connect(mapStateToProps, mapDispatchProps)(CurrentUserCompanyInfo)
