import { combineReducers } from "redux";
import { rocketReducer } from "./Reducer";

const reducers = combineReducers ({
  allrockets: rocketReducer,
});

export default reducers;