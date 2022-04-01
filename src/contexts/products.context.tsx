import React, { createContext, useState } from "react";
import SHOP_DATA from "../redux/shop/shop.data";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export function ProductsProvider({ children }: any) {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    // @ts-ignore
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
