import { ActionTypes } from "../Constants/Action-type";

export const setRockets = (rockets) => {
  return {
    type: ActionTypes.SET_ROCKET,
    payload: rockets,
  };
};