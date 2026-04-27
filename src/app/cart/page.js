"use client";
import { useCart } from "../context/cartContext";
import CardComponent from "../components/Cart/Cart";
import "../components/Cart/Cart.css";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { cartItems } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  if (!isMounted) {
    return (
      <div className="cart-page-container">
        <h1 className="main-title">Shopping Cart</h1>
        <div className="cart-table-header">
          <span>Item</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Amount</span>
          <span></span>
        </div>
        <div className="cart-list">
          <p>Loading your cart...</p>
        </div>
        <div className="cart-footer">
          <button className="order-now-btn">Order Now →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="main-title">Shopping Cart</h1>

      <div className="cart-table-header">
        <span>Item</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Amount</span>
        <span></span>
      </div>

      <div className="cart-list hide-scrollbar">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CardComponent
              key={`${item.id}-${item.selectedSize}`}
              item={item}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-footer">
        <div className="total-summary">
          <span>Total: </span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <button className="order-now-btn">Order Now →</button>
      </div>
    </div>
  );
}
