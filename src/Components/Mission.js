import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../Redux/rocket/rocket';


const Mission = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getRockets())
  }),[dispatch]
  const { rockets}= useSelector((store)=>store.rocket)
  console.log(rockets)
  return (
    <div>Mission page... </div>
  )
}

export default Mission;