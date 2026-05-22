"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import "./productInfo.css";
import { useCart } from "../../context/cartContext";

// fetch נקי
const fetchPerfumeById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/perfumes/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch perfume details");
  }

  const result = await response.json();
  return result.data;
};

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("100ml");
  const [quantity, setQuantity] = useState(1);

  const {
    data: perfume,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["perfume", id],
    queryFn: () => fetchPerfumeById(id),
    enabled: !!id,
  });

  if (isLoading || !id) {
    return (
      <div className="productInfoContainer">
        <p style={{ textAlign: "center", marginTop: "5rem" }}>
          Loading perfume details...
        </p>
      </div>
    );
  }

  if (isError || !perfume) {
    return <div className="not-found">Perfume not found</div>;
  }

  const {
    title,
    image,
    info,
    info2,
    rating,
    sizes = [],
    scent = [],
    performance = {},
  } = perfume;

  const selectedSizeData = sizes.find((s) => s.size === selectedSize);

  const currentPrice = selectedSizeData?.price || 0;
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    addToCart(
      {
        ...perfume,
        selectedSize,
        price: currentPrice,
      },
      quantity,
    );
  };

  return (
    <div className="productInfoContainer">
      <div className="warrperInfo">
        <div className="imageWrapperInfo">
          <img className="imageInfo" src={image} alt={title} />
        </div>

        <div className="infoWrapper">
          <h1 className="titleInfo">{title}</h1>

          <div className="rating">
            <i className="fa-solid fa-star"></i> <span>{rating} / 5</span>
          </div>

          <p className="infoInfo">{info}</p>
          <p className="detailedInfo">{info2}</p>

          <div className="sizeSelection">
            <h4>Select Size:</h4>
            <div className="sizeButtons">
              {sizes.map((s) => (
                <button
                  key={s.size}
                  className={selectedSize === s.size ? "activeSize" : ""}
                  onClick={() => setSelectedSize(s.size)}
                >
   <p>
                    {s.size}
                    {selectedSize === s.size && (
                      <i className="fa-solid fa-spray-can-sparkles"></i>
                    )}
                  </p>                </button>
              ))}
            </div>
          </div>

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

          <div className="priceAndTotal">
            <div className="priceInfo">${totalPrice}</div>

            <div className="countPrice">
              <button onClick={() => setQuantity((p) => p + 1)}> <i className="fa-solid fa-plus"></i></button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity((p) => (p > 1 ? p - 1 : p))}>
                 <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="buyNowBtn">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
