import React from 'react';
import { useSelector } from 'react-redux';

function RocketCard() {
  const { rockets } = useSelector((store) => store.rocket);
  let counter = 0;
  rockets.map((data) => {
    if (!data.reserved) {
      counter += 1;
    }
    return counter;
  });
  return (
    <>
      <div>
        <h3>My Rockets</h3>
        { counter > 0 ? (

          rockets.map((rocket) => {
            if (rocket.reserved) {
              return (
                <li className="Profile-cards">
                  { rocket.name}
                </li>
              );
            }
            return null;
          })
        ) : (
          <li>     Reserved Rockets Currently (0) </li>
        )}
      </div>
    </>

  );
}

export default RocketCard;
