import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRockets,updateReserved, cancelReservation } from '../Redux/rocket/rocket';
import "../Styles/Rockets.css"

const Rocket = () => {

  const rockets = useSelector((store)=>store.rocket);
  const dispatch= useDispatch()
  console.log(".........."+ rockets)
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const renderList = rockets.map((rocket) => {
    const {id, name, description, reserved,flickr_images} = rocket;
    return (
      <div key={id} className="rocket-page">
          <div className="rocket-board">
            <div><img src={flickr_images} alt={name} className="rocket-img" /></div>
            <div className="rocket-desc">
              <div className="rocket-name">{ name }</div>
              <div className="rocket-type">
              { reserved? <span className="reserved-span "> Reserved  </span>:'' }
              { description }
              </div>
              {reserved ? (
                <button type="button"
                  onClick={() => dispatch(cancelReservation(id))}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button type="button"
                  onClick={() => dispatch(updateReserved(id))}
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
    </div>
    );
  });
  return <>{renderList}</>
}

export default Rocket;