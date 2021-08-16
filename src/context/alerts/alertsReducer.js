//imports
import { SET_ALERT, REMOVE_ALERT } from "../types";

const alertsReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      // payload contains data to pass to reducers
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertsReducer;
