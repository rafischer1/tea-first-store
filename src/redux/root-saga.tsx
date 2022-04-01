import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.saga";

// generator function* to instantiate saga
export function* rootSaga() {
  yield all([call(userSagas)]);
}

// * EXAMPLE OF  A GENERATOR
// async await is built into a generator f(X)
// runs when .next() is called and you get a "done" value
// "yield" is used to pause execution
//
// function* gen(i) {
//   yield i;
//   yield i + 10;
//   return "definitely done"
// }
//
// const g = gen(5);
//
// g.next();
// {value: 5, done: false}
//
// g.next();
// {value 15, done: false}

// g.next();
// {value: "definitely done", done: true}
