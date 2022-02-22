import { CartItem } from "../cart/cart.interface";

export type ShopCollection = {
  id: number;
  title: string;
  routeName: string;
  items: CartItem[];
};
