import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRockets } from "../Redux/Actions/RockectActions";
import Rocket from "./RocketComponent";

const RocketListing = () => {
  const rockets = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets").catch((err) => {
      console.log("Error",err);
    });
    dispatch(setRockets(response.data));
  }
  console.log("rockets:", rockets);
  useEffect(() => {
    fetchRockets();
  },[]);
  return (
    <div>
      <Rocket />
    </div>
  )
}

export default RocketListing;