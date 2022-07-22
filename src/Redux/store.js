import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocket'
import missionReducer from './mission/mission'

export default configureStore({
  reducer:{
    rocket:rocketReducer,
    mission:missionReducer
  }
})
