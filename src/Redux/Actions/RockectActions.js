import { ActionTypes } from "../Constants/ActionTypes";

export const setRockets = (rockets) => {
  return {
    type: ActionTypes.SET_ROCKET,
    payload: rockets,
  };
};