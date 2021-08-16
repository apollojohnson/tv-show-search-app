import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// context imports
import AlertsReducer from "./alertsReducer";
import AlertsContext from "./alertsContext";

const AlertsState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });
    // after 5k ticks, alert disappears
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertsContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};

export default AlertsState;
