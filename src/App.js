import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    // initializes firebases auth subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log('USER:', user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // closes firebase auth subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/applesauce' element={<Shop />} />
          <Route path='shop/selbyville' element={<Shop />} />
          <Route path='shop/dracula' element={<Shop />} />
          <Route path='shop/photos' element={<Shop />} />
          <Route path='shop/releases' element={<Shop />} />
          <Route path='signin' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
