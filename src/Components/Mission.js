import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from "../Redux/mission/mission";
import "../Styles/Mission.css"

const Mission = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getMission())
  },[dispatch])
  const { missions}= useSelector((store)=>store.mission)
  return (
    <div className="mission-page">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{ mission.name }</td>
              <td>{ mission.description }</td>
              <td>
                <button type="button" className="rocket-btn">Not a Member</button>
                <button type="button" className="rocket-btn">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;