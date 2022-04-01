import { takeLatest, all, call, put } from "redux-saga/effects";
// import { userSignInSuccess, userSignInFailed } from "./user.actions";
import { UserActionTypes } from "./user.types";
import { auth } from "../../firebase/firebase.utils";
import { signOutFailed, signOutSuccess } from "./user.actions";
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

export function* signOut() {
  try {
    yield call(auth.signOut);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailed("Sign Out Failed Error"));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, googleSignIn);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([call(onSignOutStart)]);
}
