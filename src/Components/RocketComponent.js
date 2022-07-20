import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../Redux/rocket/rocket';
import { Link } from "react-router-dom";


const Rocket = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getRockets())
  },[dispatch])
  const { rockets}= useSelector((store)=>store.rocket)
  console.log(rockets)
  const renderList = rockets.map((rocket) => {
    const {id, name, type, flickr_images} = rocket;
    return (
      <div key={id}>
        <Link to={`/rocket/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{ name }</div>
                <div className="meta price">${ type }</div>
                <div className="meta">{ flickr_images }</div>
              </div>
            </div>
          </div>
        </Link>
    </div>
    );
  });
  return <>{renderList}</>
}

export default Rocket;