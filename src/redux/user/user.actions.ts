import { UserActionTypes } from "./user.types";

export const setUserAction = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
