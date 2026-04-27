"use client";

import { useState, useContext, useEffect, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("cartItem");
        if (saved !== null) {
          return JSON.parse(saved);
        }
      }
      return [];
    } catch (error) {
      console.error("Failed to parse cart items:", error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

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
    setShowNotification(true);
  };
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log(cartItems);
  return (
    // אנחנו מעבירים גם את ה-cartItems (לדף העגלה) וגם את ה-cartCount (לנאבר)
    <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
      {children}
      {showNotification && (
        <div className="cart-notification-global">
          <i className="fa-solid fa-circle-check"></i>
          <span>Added to cart! </span>
        </div>
      )}
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
