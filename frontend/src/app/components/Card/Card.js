import Link from "next/link";
import "./card.css";
import { useCart } from "../../context/cartContext"; // וודא שהנתיב נכון

export default function Card({ perfume }) {
  const { title, price, image } = perfume;
  const scentTags = Array.isArray(perfume.scent)
    ? perfume.scent.slice(0, 4)
    : [];
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
    // <Link className="linkCard" href={`/products/${perfume._id}`}>
    <div className="card">
      <Link className="linkCard" href={`/products/${perfume._id}`}>
        {/* עטיפה לתמונה כדי לשמור על גובה קבוע */}
        <div className="imageWrapper">
          <img className="image" src={image} alt={title ?? "Card image"} />
        </div>

        <div className="cardInfo">
          <h3 className="title">{title}</h3>
          {scentTags.length > 0 && (
            <div className="cardScentTags" aria-label="Scent notes">
              {scentTags.map((scent, index) => (
                <span className="cardScentTag" key={`${scent}-${index}`}>
                  {scent}
                </span>
              ))}
            </div>
          )}

          <div className="price">${price}</div>
        </div>
      </Link>
      <div className="cardButton">
        <button type="button" onClick={handleAddToCart} className="add">
          Add <i className="fa-solid fa-cart-arrow-down"></i>
        </button>
        {/* <Link href={`/products/${perfume._id}`}> */}
        <button type="button" className="details">
          Details
        </button>
        {/* </Link> */}
      </div>
    </div>
    // </Link>
  );
}
