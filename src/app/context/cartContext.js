"use client";

import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, customQuantity = 1) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize,
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + customQuantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity: customQuantity }];
    });
  };
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log(cartItems);
  return (
    // אנחנו מעבירים גם את ה-cartItems (לדף העגלה) וגם את ה-cartCount (לנאבר)
    <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
