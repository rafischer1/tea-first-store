import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// @ts-ignore
import logo from "../../assets/tea.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { ColorContext, colorNameMap } from "../../contexts/color.context";
import ColorContextSelect from "../color-select/color-select.component";
import { RootState } from "../../redux/root-reducer";
import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {
  // redux action dispatch
  const dispatch = useDispatch();
  // context subscription for color selection
  const { color } = useContext(ColorContext);
  // redux selectors for component state
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const cartDropdownHidden = useSelector(
    (state: RootState) => state.cartDropdown.hidden
  );

  // es6 method redux action dispatch
  const signOutUser = () => dispatch(signOutStart());

  // css-in-js styling for Link rendering
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img
          src={logo}
          style={{ height: 45, borderRadius: 20 }}
          alt="Logo Image"
        />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="shop">SHOP</OptionLink>
        <OptionLink to="contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as={"div"}
            className="option"
            onClick={() => signOutUser()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
        <div style={{ cursor: "pointer", outline: "none", marginTop: 5 }}>
          {colorNameMap[color]}
        </div>
        <ColorContextSelect />
      </OptionsContainer>
      {cartDropdownHidden ? null : (
        <CartDropdown cartItems={null} dispatch={null} />
      )}

      {/*<Outlet />*/}
    </HeaderContainer>
  );
};

// "Older" style redux mapStateToProps
// MapStateToProps replaced by useSelector hook
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   cartDropdownHidden: selectCartHidden,
// });

// export default connect(mapStateToProps)(Header);

export default Header;
