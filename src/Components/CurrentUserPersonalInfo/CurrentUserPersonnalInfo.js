import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { USER_PICTURE_URL } from '../../constants/BackendConstants'
import CustomCards from '../Cards/CustomCards'
import "./CurrentUserPersonnalInfo.css"
function CurrentUserPersonnalInfo(props) {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const [currentUser,setCurrentUser]=useState(props.user)

    return (
<div className="current-page">
<CustomCards>
            <div className="user-picture-username">
                <img className="user-picture" src={USER_PICTURE_URL+currentUser.picture}></img>
                <div className="user-username">
                {currentUser.firstname+ " "+currentUser.lastname}
                </div>
            </div>
            <div className="user-infos">
            <div className="single-user-info">
                <div className="single-user-info-label">Nom:</div>
                <div className="single-user-info-value">{currentUser.lastname}</div>

            </div>

            <div className="single-user-info">
                <div className="single-user-info-label">Prénom:</div>
                <div className="single-user-info-value">{currentUser.firstname}</div>

            </div>
            <div className="single-user-info">
                <div className="single-user-info-label">Adresse électronique:</div>
                <div className="single-user-info-value">{currentUser.email}</div>

            </div>
            <div className="single-user-info">
                <div className="single-user-info-label">Date de naissance:</div>
                <div className="single-user-info-value">{formatDate(Date.parse(currentUser.birthdate))}</div>

            </div>
            <div className="single-user-info">
                <div className="single-user-info-label">Téléphone:</div>
                <div className="single-user-info-value">{currentUser.phone}</div>

            </div>
            </div>
        </CustomCards>
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


export default connect(mapStateToProps, mapDispatchProps)(CurrentUserPersonnalInfo)
