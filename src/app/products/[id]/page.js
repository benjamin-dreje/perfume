"use client";
import { useState, use } from "react";
import { perfumes } from "../../lib/perfume";
import "./productInfo.css";

export default function ProductPage({ params }) {
  const { id } = use(params);
  const perfume = perfumes.find((p) => p.id === parseInt(id));

  // State לבחירת גודל ומחיר דינמי
  const [selectedSize, setSelectedSize] = useState("100ml");

  if (!perfume) {
    return <div className="not-found">Perfume not found</div>;
  }

  const { title, image, info, info2, rating, sizes, scent, performance } =
    perfume;

  // מציאת המחיר לפי הגודל שנבחר (או המחיר הדיגיטלי כברירת מחדל)
  const selectedSizeData = sizes.find((s) => s.size === selectedSize);
  const currentPrice = selectedSizeData.price;

  return (
    <div className="productInfoContainer">
      <div className="warrperInfo">
        {/* צד שמאל - תמונה */}
        <div className="imageWrapperInfo">
          <img className="imageInfo" src={image} alt={title} />
        </div>

        {/* צד ימין - מידע */}
        <div className="infoWrapper">
          <h1 className="titleInfo">{title}</h1>

          <div className="rating">
            ⭐ <span>{rating} / 5</span>
          </div>

          <p className="infoInfo">{info}</p>
          <p className="detailedInfo">{info2}</p>

          {/* בחירת גודל */}
          <div className="sizeSelection">
            <h4>Select Size:</h4>
            <div className="sizeButtons">
              {sizes.map((s) => (
                <button
                  key={s.size}
                  className={selectedSize === s.size ? "activeSize" : ""}
                  onClick={() => setSelectedSize(s.size)}
                >
                  {s.size}
                </button>
              ))}
            </div>
          </div>

          {/* תגיות ריח */}
          <div className="scentTags">
            <h4>Scent</h4>
            {scent.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>

          <div className="performance">
            <p>
              <strong>Longevity:</strong> {performance.longevity}
            </p>
            <p>
              <strong>Sillage:</strong> {performance.sillage}
            </p>
          </div>

          <div className="priceInfo">${currentPrice}</div>

          <button className="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
