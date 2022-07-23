import React from 'react';
import { useSelector } from 'react-redux';

function MissionCard() {
  const { missions } = useSelector((store) => store.mission);
  const missionReserved = missions.filter((data) => data.mission === true);
  let missionCounter = 0;

  missions.filter((mission) => {
    if (!mission.mission) {
      missionCounter += 1;
    }
    return missionCounter;
  });

  return (
    <>
      <div>
        <h3>My Missions</h3>
        { missionCounter >= 0 ? (
          missionReserved.map((mission) => (

            <li key={mission.id} className="Profile-cards">
              {mission.name}
            </li>
          ))

        ) : (
          <li>
            reserved missions currently(0)

          </li>
        )}
      </div>

    </>
  );
}

export default MissionCard;
