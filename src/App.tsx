import React, { lazy, Suspense } from "react";
import "./App.scss";
import { AppDispatch } from "./redux/store";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setUserAction } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ApiTest from "./routes/ApiTest/ApiTest.compnent";

const SignInAndSignUp = lazy(
  () => import("./routes/sign-in/sign-in-and-sign-up.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Collection = lazy(
  () => import("./routes/collection/collection.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Home = lazy(() => import("./routes/home/home.component"));

class App extends React.Component<
  { setCurrentUser: any; currentUser: any },
  {}
> {
  unsubscribeFromAuth: any | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        // console.log("CURRENTUSER:", userRef);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // closes firebase auth subscription
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  // <Routes> register all the routes for the application
  // <Route> the relative path where path matches and render said component
  render() {
    return (
      <div className="App">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/*<Route path="/" element={<Header />}>*/}
              <Route index element={<Home />} />
              <Route path="apiTest" element={<ApiTest />} />
              <Route path="shop" element={<Shop />}>
                <Route path=":collectionId" element={<Collection />} />
              </Route>

              <Route path="checkout" element={<Checkout />} />
              {this.props.currentUser ? (
                <Route path="signin" element={<Home />} />
              ) : (
                <Route path="signin" element={<SignInAndSignUp />} />
              )}
              {/*</Route>*/}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: any) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
