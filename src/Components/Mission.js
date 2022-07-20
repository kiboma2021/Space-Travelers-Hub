import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from '../Redux/mission/mission';




const Mission = () => {
  const dispatch = useDispatch()
useEffect(()=>{
 dispatch(getMission())
})
  const { mission} = useSelector((store)=>store.mission)
  console.log(mission)
  return (
    <div>Mission page... </div>
  )
}

export default Mission;