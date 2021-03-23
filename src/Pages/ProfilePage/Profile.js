import { Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CurrentUserCompanyInfo from '../../Components/CurrentUserCompanyInfo/CurrentUserCompanyInfo'
import CurrentUserPersonnalInfo from '../../Components/CurrentUserPersonalInfo/CurrentUserPersonnalInfo'
import "./Profile.css"
function Profile() {

     const [selectedTab,setSelectedTab]=useState(0);
const handleTabSelectChange=(index)=>{
setSelectedTab(index)
};

    return (
        <div className="whole_page">
          
                
                    <Tabs className="tabs-custom" onChange={(e,index)=>{
                        console.log(index)
                        handleTabSelectChange(index)}} >
                        <Tab label="Mon profil" className={selectedTab==0?"tab-custom selected":"tab-custom"} />
                        
                        <Tab label="Informations de la société" className={selectedTab==1?"tab-custom selected":"tab-custom"} />
                    </Tabs>
                    <Typography  />
               
              
                <img className="user-cover" src="https://gogo-react.coloredstrategies.com/assets/img/social/header.jpg"></img>

                <div className="user-info-component col-md-3">
                    <CurrentUserPersonnalInfo></CurrentUserPersonnalInfo>
                </div>
                <div className="user-info-component col-md-8">
                    <CurrentUserCompanyInfo></CurrentUserCompanyInfo>
                </div>
            </div>
    )
}

export default Profile
