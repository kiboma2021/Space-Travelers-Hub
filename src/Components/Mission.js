import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission, missionUpdate } from '../Redux/mission/mission';
import '../Styles/Mission.css';

const Mission = () => {
  const { missions } = useSelector((store) => store.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMission());
    }
  }, [dispatch]);

  const updateMission = (id) => {
    const dene = missions.map((item) => {
      if (item.id === id) {
        const missionState = item.mission;
        return {
          ...item,
          mission: !missionState,
        };
      }
      return item;
    });
    dispatch(missionUpdate(dene));
  };

  return (
    <div className="mission-page">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        { missions.map((mis) => (

          <tbody key={mis.id}>
            <tr key={mis.id} className="mission-card">
              <td>{ mis.name }</td>
              <td>{ mis.description }</td>
              <td className="mission-btn"><button type="button" className={mis.mission ? ' aactive' : ' inactive '}>{mis.mission ? ' active Member' : 'Not a Memeber'}</button></td>
              <td className="mission-btn"><button type="button" className={mis.mission ? 'activebtn' : 'inactivebtn'} onClick={() => updateMission(mis.id)}>{ mis.mission ? 'Leave Misson ' : ' Join Mission'}</button></td>
            </tr>
          </tbody>
        ))}
        ;
      </Table>
    </div>
  );
};
export default Mission;
