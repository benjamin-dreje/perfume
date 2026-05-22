"use client";
import { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./pageCategory.css";
import { useCart } from "../../context/cartContext";
import PerfumeCard from "../../components/Card/Card";

const fetchPerfumes = async () => {
  const response = await fetch("http://localhost:5000/api/perfumes/");
  if (!response.ok) {
    throw new Error("Failed to fetch perfumes");
  }
  const result = await response.json();
  return result.data; // <--- תיקון: הבאקאנד שלך שולח את המערך בתוך ה-data!
};
export default function CategoryPage({ params }) {
  const { category } = use(params);
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  const {
    data: perfumes = [], // ברירת מחדל מערך ריק בזמן טעינה
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["perfumes"],
    queryFn: fetchPerfumes,
  });

  // לוגיקת סינון נקייה
  const filteredPerfumes =
    selectedCategory.toLowerCase() === "all"
      ? perfumes
      : perfumes.filter(
          (p) =>
            p.category?.toLowerCase().trim() ===
            selectedCategory.toLowerCase().trim(),
        );

  const title =
    selectedCategory.toLowerCase() === "all"
      ? "Discover All Our Perfumes"
      : `Category: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;

  if (isLoading) {
    return (
      <div className="pageWrapper">
        <h1 className="pageTitle">{title}</h1>
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Loading perfumes...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pageWrapper">
        <h1 className="pageTitle">{title}</h1>
        <p style={{ textAlign: "center", color: "red", marginTop: "2rem" }}>
          Error: {error.message}
        </p>
      </div>
    );
  }

  const isSelected = (current) =>
    selectedCategory.toLowerCase() === current.toLowerCase();

  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">{title}</h1>

      {category.toLowerCase() === "all" && (
        <div className="containerBtns">
          <button
            className={`btn ${isSelected("all") ? "activeCategory" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`btn ${isSelected("men") ? "activeCategory" : ""}`}
            onClick={() => setSelectedCategory("men")}
          >
            Men
          </button>
          <button
            className={`btn ${isSelected("women") ? "activeCategory" : ""}`}
            onClick={() => setSelectedCategory("women")}
          >
            Women
          </button>
          <button
            className={`btn ${isSelected("unisex") ? "activeCategory" : ""}`}
            onClick={() => setSelectedCategory("unisex")}
          >
            Unisex
          </button>
        </div>
      )}

      <div className="filterContainer">
        <div className="resultFilter">
          <p>result : {filteredPerfumes.length}</p>
        </div>
        <div className="filterIcon">
          <p>
            filter <i className="fa-solid fa-filter"></i>
          </p>
        </div>
      </div>

      <div className="grid4">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map((perfume) => (
            <PerfumeCard key={perfume._id} perfume={perfume} />
          ))
        ) : (
          <p>No perfumes found in this category.</p>
        )}
      </div>
    </div>
  );
}
