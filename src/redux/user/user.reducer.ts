import { UserActionTypes } from "./user.types";

export const USER_REDUCER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (
  state = USER_REDUCER_INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_IN_FAILED:
    case UserActionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
