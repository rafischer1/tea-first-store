import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setUserAction } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
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
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shop/applesauce" element={<Shop />} />
          <Route path="shop/selbyville" element={<Shop />} />
          <Route path="shop/dracula" element={<Shop />} />
          <Route path="shop/photos" element={<Shop />} />
          <Route path="shop/releases" element={<Shop />} />
          {this.props.currentUser ? (
            <Route exact path="signin" element={<HomePage />} />
          ) : (
            <Route exact path="signin" element={<SignInAndSignUp />} />
          )}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
