"use client";
import { useCart } from "../context/cartContext";
import CardComponent from "../components/Cart/Cart";
import "../components/Cart/Cart.css";

export default function CartPage() {
  const { cartItems } = useCart();
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
        {cartItems.map((item) => (
          <CardComponent key={`${item.id}-${item.selectedSize}`} item={item} />
        ))}
      </div>

      <div className="cart-footer">
        <button className="order-now-btn">Order Now →</button>
      </div>
    </div>
  );
}
