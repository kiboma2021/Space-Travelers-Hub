import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from "../Redux/mission/mission";

const Mission = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getMission())
  },[dispatch])
  const { missions}= useSelector((store)=>store.mission)
  console.log(missions)
  const renderMission = missions.map((mission) => {
    const {id, name, description} = mission;
    return (
      <div key={id} className="rocket-page">
          <div className="rocket-board">
            <div className="rocket-desc">
              <div className="rocket-name">{ name }</div>
              <div className="rocket-type">{ description }</div>
              <button type="button" className="rocket-btn">Reserve Rocket</button>
            </div>
          </div>
    </div>
    );
  });
  return <>{renderMission}</>
}

export default Mission;