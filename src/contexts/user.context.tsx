import React, { createContext, useReducer } from "react";
import userReducer, {
  USER_REDUCER_INITIAL_STATE,
} from "../redux/user/user.reducer";
import { UserActionTypes } from "../redux/user/user.types";

interface ContextState {
  currentUser: null | any;
  setCurrentUser: () => null | any;
}

// the user context value to access
export const UserContext = createContext({} as ContextState);

// the component wrapper for providing context
export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, USER_REDUCER_INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user: any | null) =>
    dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user });
  const value = { currentUser, setCurrentUser };

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
