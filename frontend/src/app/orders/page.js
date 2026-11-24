"use client";

import { useCallback, useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import "./orders.css";

export default function OrdersPage() {
  const { fetchOrders } = useCart();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadOrders = useCallback(async () => {
    try {
      setOrders(await fetchOrders());
      setError("");
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setIsLoading(false);
    }
  }, [fetchOrders]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <main className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      {isLoading ? (
        <p className="orders-message">Loading your orders...</p>
      ) : error ? (
        <p className="orders-message orders-error">{error}</p>
      ) : orders.length === 0 ? (
        <p className="orders-message">
          You haven&apos;t placed any orders yet.
        </p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <section className="order-card" key={order._id}>
              <div className="order-heading">
                <div>
                  <h2>Order #{order._id.slice(-8)}</h2>
                  <p>{new Date(order.createdAt).toLocaleString()}</p>
                </div>
                <strong>${order.total.toFixed(2)}</strong>
              </div>

              <div className="ordered-items">
                {order.items.map((item, index) => (
                  <article
                    className="ordered-item"
                    key={`${item.productId}-${item.selectedSize}-${index}`}
                  >
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <div className="ordered-item-placeholder" />
                    )}
                    <div className="ordered-item-details">
                      <h3>{item.title}</h3>
                      {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <strong>${item.lineTotal.toFixed(2)}</strong>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
