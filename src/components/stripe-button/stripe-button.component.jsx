import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const StripeButton = ({ price, clearCart }) => {
  let nav = useNavigate();
  const priceForStripe = price * 100;
  const onToken = (token) => {
    alert("Payment Success");
    console.log("PAYMENT TOKEN:", token);
    clearCart();
    setTimeout(() => {
      nav("/");
    }, 2000);
  };
  const key =
    "pk_test_51KV5xcGuEPvAuMxtIAMcTtVZBgflWYSk2bjIBRMTLcOcN2VGmdPgRJ1njMoayV2XHcIVNycShLefCz2g3fP2q0qu00yPdIpPIg";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Tea First Store"
      billingAddress
      shippingAddress
      description={`Total $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeButton);
