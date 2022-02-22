import { UserActionTypes } from "./user.types";

export const setUserAction = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
