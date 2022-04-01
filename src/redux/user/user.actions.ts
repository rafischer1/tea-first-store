import { UserActionTypes } from "./user.types";
import { createAction } from "@reduxjs/toolkit";

export const setUserAction = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () =>
  createAction(UserActionTypes.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) => {
  // @ts-ignore
  return createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password });
};

export const userSignInSuccess = (user: any) =>
  createAction(UserActionTypes.SIGN_IN_SUCCESS, user);

export const userSignInFailed = (error: any) =>
  createAction(UserActionTypes.SIGN_IN_FAILURE, error);
