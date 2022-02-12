import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import logo from "../../assets/tea.png";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="logo-container" alt="Logo Image" />
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="cart">
        CART
      </Link>
      <Link className="option" to="contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
