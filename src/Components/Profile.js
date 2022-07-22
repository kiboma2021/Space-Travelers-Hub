import React from "react";
import MissionCard from "./profile/MissionCard";
import RocketCard from "./profile/RocketCard";
import '../Styles/Profile.css'

const Profile = () => {

  return (
    <div className="profile-page">
    <MissionCard/>
    <RocketCard/>
    </div>
  )

}

export default Profile;