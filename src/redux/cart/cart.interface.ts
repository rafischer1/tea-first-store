export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

export type Cart = {
  hidden: boolean;
  cartItems: CartItem[];
};
