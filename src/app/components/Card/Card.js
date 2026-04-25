import Link from "next/link";
import "./card.css";
import { useCart } from "../../context/cartContext"; // וודא שהנתיב נכון

export default function Card({ perfume }) {
  const { title, info, price, image } = perfume;
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const productWithDefaults = {
      ...perfume,
      selectedSize: "100ml", // חייב להיות זהה לשם השדה שדף המוצר שולח
      price: price, // משתמש במחיר הדיפולטיבי של הכרטיס
    };
    addToCart(productWithDefaults, 1);
  };
  return (
    <div className="card">
      {/* עטיפה לתמונה כדי לשמור על גובה קבוע */}
      <div className="imageWrapper">
        <img className="image" src={image} alt={title ?? "Card image"} />
      </div>

      <div className="cardInfo">
        <h3 className="title">{title}</h3>
        <p className="info">{info}</p>
        <div className="price">${price}</div>
      </div>

      <div className="cardButton">
        <button onClick={handleAddToCart} className="add">
          Add <i className="fa-solid fa-cart-arrow-down"></i>
        </button>
        <Link href={`/products/${perfume.id}`}>
          <button className="details">Details</button>
        </Link>
      </div>
    </div>
  );
}
