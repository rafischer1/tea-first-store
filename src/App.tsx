import React from "react";
import "./App.css";
import { AppDispatch } from "./redux/store";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setUserAction } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";
import Collection from "./pages/collection/collection.component";

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
        console.log("CURRENTUSER:", userRef);
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

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />}>
            <Route path=":collectionId" element={<Collection />} />
          </Route>

          <Route path="checkout" element={<Checkout />} />
          {this.props.currentUser ? (
            <Route path="signin" element={<HomePage />} />
          ) : (
            <Route path="signin" element={<SignInAndSignUp />} />
          )}
        </Routes>
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
