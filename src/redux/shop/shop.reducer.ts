import { SHOP_DATA } from "./shop.data";
import { AnyAction } from "redux";

const SHOP_INITIAL_STATE = { collections: SHOP_DATA };

const shopReducer = (state = SHOP_INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
