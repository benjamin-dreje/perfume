import "./Cart.css";
import { useCart } from "../../context/cartContext"; // וודא שהנתיב נכון

export default function Cart({ item }) {
  const { title, image, price, info, quantity, selectedSize } = item;
  return (
    <div className="cart-item">
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
        <button>-</button>
        <span>{quantity || 1}</span>
        <button>+</button>
      </div>

      {/* מחיר ליחידה */}
      <div className="item-price">${price.toFixed(2)}</div>

      {/* סכום כולל לשורה */}
      <div className="item-total">${(price * (quantity || 1)).toFixed(2)}</div>

      {/* כפתור מחיקה */}
      <button className="remove-btn">delete</button>
    </div>
  );
}
