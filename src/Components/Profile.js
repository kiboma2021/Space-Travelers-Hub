import React from "react";

import MissionCard from "./profile/MissionCard";
import RocketCard from "./profile/RocketCard";
import { useSelector } from "react-redux";


const Profile = () => {

 // const missionsData = useSelector((store)=>store.mission.missions);

  return (

    <div>Profile page... 
    <MissionCard/>
    <RocketCard/>
    </div>
  )

    <div className="missionsProfile">
      <h3>My Missions</h3>

    </div>
  );

}

export default Profile;