import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocket'

export default configureStore({
  reducer:{
    rocket:rocketReducer
  }
})