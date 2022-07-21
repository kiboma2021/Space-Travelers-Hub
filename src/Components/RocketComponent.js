import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRockets,updateReserved } from '../Redux/rocket/rocket';
import "../Styles/Rockets.css"

const Rocket = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(getRockets())
  },[dispatch])
  const { rockets}= useSelector((store)=>store.rocket)
  
   const updateRocket=(id)=>{
     const dene =  rockets.map((item)=>{   
       if( item.id ===id){
         const reservedState = item.reserved
         return{
           ...item,
           reserved:!reservedState
         }
       }
       return item
      })
      dispatch(updateReserved(dene))
   }



  const renderList = rockets.map((rocket) => {
    const {id, name, description, reserved,flickr_images} = rocket;
    return (
      <div key={id} className="rocket-page">
          <div className="rocket-board">
            <div><img src={flickr_images} alt={name} className="rocket-img" /></div>
            <div className="rocket-desc">
              <div className="rocket-name">{ name }</div>
              <div className="rocket-type">
              { reserved? <span className="reserved-span "> Reserved  </span>: ' rocket-type' }
              { description }
              </div>
              <button type="button"onClick={()=>updateRocket(id)} className={reserved? "rocket-btn": 'btn'}>
             { reserved? ' Cancel Reservation' : ' Reserve Rocket'  }
              </button>
            </div>
          </div>
    </div>
    );
  });
  return <>{renderList}</>
}

export default Rocket;