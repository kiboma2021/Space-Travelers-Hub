import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../Redux/rocket/rocket';
import "../Styles/Rockets.css"

const Rocket = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getRockets())
  },[dispatch])
  const { rockets}= useSelector((store)=>store.rocket)
  console.log(rockets)
  const renderList = rockets.map((rocket) => {
    const {id, name, description, flickr_images} = rocket;
    return (
      <div key={id} className="rocket-page">
          <div className="rocket-board">
            <div><img src={flickr_images} alt={name} className="rocket-img" /></div>
            <div className="rocket-desc">
              <div className="rocket-name">{ name }</div>
              <div className="rocket-type">{ description }</div>
              <button type="button" className="rocket-btn">Reserve Rocket</button>
            </div>
          </div>
    </div>
    );
  });
  return <>{renderList}</>
}

export default Rocket;