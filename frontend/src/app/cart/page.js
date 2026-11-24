"use client";
import { useCart } from "../context/cartContext";
import CardComponent from "../components/Cart/Cart";
import "../components/Cart/Cart.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, placeOrder } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderError, setOrderError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOrder = async () => {
    setIsOrdering(true);
    setOrderError("");

    try {
      await placeOrder(cartItems);
      router.push("/orders");
    } catch (error) {
      setOrderError(error.message);
    } finally {
      setIsOrdering(false);
    }
  };

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
          <button className="order-now-btn" disabled>
            Order Now →
          </button>
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
          <p className="cartEmpty">Your cart is empty.</p>
        )}
      </div>
      <div className="cart-footer">
        <div className="total-summary">
          <span>Total: </span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        {orderError && <p className="order-error">{orderError}</p>}
        <button
          className="order-now-btn"
          onClick={handleOrder}
          disabled={isOrdering || cartItems.length === 0}
        >
          {isOrdering ? "Placing order..." : "Order Now →"}
        </button>
      </div>
    </div>
  );
}
