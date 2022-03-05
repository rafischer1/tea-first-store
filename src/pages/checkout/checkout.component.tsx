import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import { CartItem } from "../../redux/cart/cart.interface";
import { CheckoutPageStyles } from "./checkout.component.styles";

type Props = {
  cartItems: CartItem[];
  total: number;
};

const headerTitles = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = ({ cartItems, total }: Props) => (
  <CheckoutPageStyles.Container>
    <CheckoutPageStyles.Header>
      {headerTitles.map((title, index) => (
        <CheckoutPageStyles.HeaderBlock key={index}>
          <span>{title}</span>
        </CheckoutPageStyles.HeaderBlock>
      ))}
    </CheckoutPageStyles.Header>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <CheckoutPageStyles.Total>
      <span>TOTAL: ${total}</span>
    </CheckoutPageStyles.Total>
    <CheckoutPageStyles.Warning>
      * Please use the test credit card: <br /> 4242 4242 4242 4242 <br /> Exp:
      12/23 CVV: 123 *
    </CheckoutPageStyles.Warning>
    <StripeButton price={total} />
  </CheckoutPageStyles.Container>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// @ts-ignore
export default connect(mapStateToProps)(Checkout);
