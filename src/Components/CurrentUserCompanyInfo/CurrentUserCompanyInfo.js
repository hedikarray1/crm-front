import React, { useState } from 'react'
import { connect } from 'react-redux';
import CustomCards from '../Cards/CustomCards'
import "./CurrentUserCompanyInfo.css"
import NoContent from "../../assets/pictures/bad-review.svg"
function CurrentUserCompanyInfo(props) {

const [MyCompany,setMyCompany]=useState(null)
//const role=props.user.current_user.role;

    return (
        <div className="current-page">
{MyCompany!=null?<CustomCards>
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
    return { user: state.Auth.current_user };
};


const mapDispatchProps = (dispatch) => {
    return {}

};


export default connect(mapStateToProps, mapDispatchProps)(CurrentUserCompanyInfo)
