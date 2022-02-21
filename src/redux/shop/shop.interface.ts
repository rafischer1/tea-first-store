import { CartItem } from "../cart/cart.interface";

export type ShopCollection = {
  [key: string]: {
    id: number;
    title: string;
    routeName: string;
    items: CartItem[];
  };
};
