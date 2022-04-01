import { takeLatest, all, call } from "redux-saga/effects";
// import { userSignInSuccess, userSignInFailed } from "./user.actions";
import { UserActionTypes } from "./user.types";
// import {
//   createUserProfileDocument,
//   signInWithGoogle,
// } from "../../firebase/firebase.utils";

export function* googleSignIn() {
  // try {
  //   const { user } = yield call(signInWithGoogle);
  //   yield call(createUserProfileDocument(user, {}));
  // } catch (error) {
  //   yield put(userSignInFailed(error));
  // }
}

export function* emailSignIn() {
  // try {
  //   const { user } = yield call();
  //   yield call(createUserProfileDocument(user, {}));
  // } catch (error) {
  //   yield put(userSignInFailed(error));
  // }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, googleSignIn);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
