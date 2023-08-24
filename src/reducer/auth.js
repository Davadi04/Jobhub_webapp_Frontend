import {
  AUTH,
  LOGOUT,
  END_LOADING,
  START_LOADING,
} from "../constants/actionType";

const authReducer = (
  state = {
    authData: null,
    authError: null,
    isLoading: false,
    message: null,
    savedItem: null,
    applyJobs: null,
  },
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data };

    case "SAVEDITEM":
      localStorage.setItem("savedItemed", JSON.stringify({ ...action?.data }));

      return { ...state, savedItem: action.data };

    case "APPLYJOBS":
      localStorage.setItem("applyjobs", JSON.stringify({ ...action?.data }));

      return { ...state, applyJobs: action.data };

    case "ERROR":
      localStorage.setItem("error", JSON.stringify({ ...action?.data }));

      return { ...state, authError: action.data };

    case "MESSAGE":
      localStorage.setItem("message", JSON.stringify({ ...action?.data }));

      return { ...state, message: action.data };

    case "MESSAGEREMOVAL":
      return { ...state, message: null };

    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, authError: null };

    default:
      return state;
  }
};

export default authReducer;
