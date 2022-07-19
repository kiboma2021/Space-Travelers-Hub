import { ActionTypes } from "../Constants/Action-type";
const initialState = {
  rockets:[]
}

export const rocketReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_ROCKET:
      return {...state,rockets:payload};
    default:
      return state;
  }
};