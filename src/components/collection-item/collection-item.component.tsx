import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { CartItem } from "../../redux/cart/cart.interface";
import { AppDispatch } from "../../redux/store";

type Props = {
  item: CartItem;
  addItem: (item: CartItem) => { payload: CartItem; type: string };
};

const CollectionItem = ({ item, addItem }: Props) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
    <div className="custom-button">
      <CustomButton
        inverted={true}
        isGoogleSignIn={false}
        onClick={() => addItem(item)}
      >
        Add To Cart
      </CustomButton>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addItem: (item: CartItem) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
