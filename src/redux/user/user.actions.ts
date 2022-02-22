import { UserActionTypes } from "./user.types";
import firebase from "firebase/compat";
import User = firebase.User;

export const setUserAction = (user: User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
