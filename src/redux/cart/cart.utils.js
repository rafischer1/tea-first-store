export const CartUtils = {
  addItemToCart: (cartItems, itemToAdd) => {
    const exists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
    if (exists) {
      return cartItems.map((cartItem) =>
        cartItem.id === itemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  },
  clearItemFromCart: (cartItems, idToRemove) => {
    return cartItems.filter((item) => item.id !== idToRemove);
  },
  removeItemFromCart: (cartItems, itemToRemove) => {
    const exists = cartItems.find(
      (cartItem) => cartItem.id === itemToRemove.id
    );
    if (exists.quantity === 1) {
      return cartItems.filter((item) => item.id !== itemToRemove.id);
    } else {
      return cartItems.map((item) =>
        item.id === itemToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  },
};
