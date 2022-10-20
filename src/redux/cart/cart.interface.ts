// Defines an item's properties
export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

// Defines a Cart's status and array of items
export type Cart = {
  hidden: boolean;
  cartItems: CartItem[];
};
