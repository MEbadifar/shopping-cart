import { createContext, useState } from "react";

import { getProductData } from "../data/items";

export const CartContext = createContext({
  items: [],
  ProductQuantity: () => {},
  increament: () => {},
  decreament: () => {},
  deleteProduct: () => {},
  TotalAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function ProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function increament(id) {
    const quantity = ProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteProduct(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function decreament(id) {
    const quantity = ProductQuantity(id);

    if (quantity === 1) {
      deleteProduct(id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function TotalAmount() {
    let totalAmount = 0;

    cartProducts.map((item) => {
      const productData = getProductData(item.id);

      totalAmount += productData.price * item.quantity;
    });

    return totalAmount;
  }

  const ContextValue = {
    items: cartProducts,
    ProductQuantity,
    increament,
    decreament,
    deleteProduct,
    TotalAmount,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
