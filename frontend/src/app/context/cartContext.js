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

  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevCart) => {
      return prevCart.map((item) => {
        const itemId = item.id || item._id;
        if (itemId === id && item.selectedSize === size) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
    });
  };

  const addToCart = (product, customQuantity = 1) => {
    const productId = product.id || product._id;

    setCartItems((prev) => {
      const exists = prev.find((item) => {
        const itemId = item.id || item._id;
        return (
          itemId === productId && item.selectedSize === product.selectedSize
        );
      });

      if (exists) {
        return prev.map((item) => {
          const itemId = item.id || item._id;
          if (
            itemId === productId &&
            item.selectedSize === product.selectedSize
          ) {
            return { ...item, quantity: item.quantity + customQuantity };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prev,
          { ...product, id: productId, quantity: customQuantity },
        ];
      }
    });

    setShowNotification(true);
  };

  const deleteCart = (productId, selectedSize) => {
    setCartItems((prev) => {
      return prev.filter((item) => {
        const itemId = item.id || item._id;
        const isSameItem =
          itemId === productId && item.selectedSize === selectedSize;
        return !isSameItem;
      });
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, deleteCart, updateQuantity }}
    >
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
