import "./Cart.css";
import { useCart } from "../../context/cartContext"; // וודא שהנתיב נכון
import { useState } from "react";

export default function Cart({ item }) {
  const { id, title, image, price, info, quantity, selectedSize } = item;

  const deleteCart = useCart().deleteCart;
  const updateQuantity = useCart().updateQuantity;

  const handleInc = () => {
    updateQuantity(id, selectedSize, quantity + 1);
  };

  const handleDecr = () => {
    updateQuantity(id, selectedSize, quantity - 1);
  };

  return (
    <div className="cart-item ">
      {/* תמונה ופרטים */}
      <div className="item-info">
        <div className="item-image-placeholder">
          <img src={image} alt={title} />
        </div>
        <div className="item-text">
          <h4>{title}</h4>
          <p>{info}</p>
          {selectedSize && <p className="sizeSelected">Size: {selectedSize}</p>}
        </div>
      </div>

      {/* כמות */}
      <div className="item-quantity">
        <button onClick={handleDecr}>-</button>
        <span>{quantity || 1}</span>
        <button onClick={handleInc}>+</button>
      </div>

      {/* מחיר ליחידה */}
      <div className="item-price">${price.toFixed(2)}</div>

      {/* סכום כולל לשורה */}
      <div className="item-total">${(price * (quantity || 1)).toFixed(2)}</div>
      <div className="unitPrice">
        <p>Unit price {price}</p>
      </div>
      {/* כפתור מחיקה */}
      <button className="remove-btn" onClick={() => deleteCart(id ,selectedSize)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
