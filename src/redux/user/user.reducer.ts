import { UserActionTypes } from "./user.types";

export const USER_REDUCER_INITIAL_STATE = { currentUser: null };

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
    default:
      return state;
  }
};

export default userReducer;
