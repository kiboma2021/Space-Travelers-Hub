import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Rocket = () => {
  const rockets = useSelector((state) => state.allrockets.rockets );
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