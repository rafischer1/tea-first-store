import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    // initializes firebase's auth subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          // snapshot.exists and .data()
          userRef.onSnapshot((snapshot) => {
            this.setState({
              currentUser: { id: snapshot.id, ...snapshot.data() },
            });
          });
        }
      }
      // reset to null
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    // closes firebase auth subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/applesauce" element={<Shop />} />
          <Route path="shop/selbyville" element={<Shop />} />
          <Route path="shop/dracula" element={<Shop />} />
          <Route path="shop/photos" element={<Shop />} />
          <Route path="shop/releases" element={<Shop />} />
          <Route path="signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
