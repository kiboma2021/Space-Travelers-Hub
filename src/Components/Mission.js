import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMission,missionUpdate } from "../Redux/mission/mission";
import "../Styles/Mission.css"

const Mission = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getMission())
  },[dispatch])
  const { missions} = useSelector((store)=>store.mission)
  
  const updateMission= (id)=>{
  const dene= missions.map((item)=>{
    if (item.id=== id){
      const missionState=item.mission
      return{
        ...item,
        mission:!missionState
      }
    }
    return item
  })
  dispatch(missionUpdate(dene))
  }
     

  const renderList = missions.map((missioned)=>{
    const { id,name,description,mission}=missioned

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
        <tbody key={id}>
            <tr key={id} className="mission-card">
              <td>{ name }</td>
              <td>{ description }</td>
              <td className="mission-btns">

                <p className={mission? ' aactive' : ' inactive ' }>{mission? ' active Member' : 'Not a Memeber'}</p>
                <button className={ mission ? 'activebtn' : 'inactivebtn' }  type="button" onClick={()=>updateMission(id)} >{ mission? 'Cancel Misson ' : ' Join Mission'}</button>

                <button type="button" className="rocket-btn">Not a Member</button>
              </td>
              <td>
                <button type="button" className="rocket-btn">Join Mission</button>
 
              </td>
            </tr>

        </tbody>
      </table>
    </div>
  );
})
return <>{renderList}</>
}
export default Mission;