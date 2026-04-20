"use client";
import { use, useState, useEffect } from "react"; // הוספנו useEffect
import { perfumes } from "../../lib/perfume";
import PerfumeCard from "../../components/Card/Card";
import "./pageCategory.css";

// פרמטר הקטגוריה מגיע מהנתיב (URL) - לדוגמה: /product/men ולינק יובל הוא <Link href="/product/men">גברים</Link>
export default function CategoryPage({ params }) {
  const { category } = use(params);

  // 1. ה-State החדש לשמירת הקטגוריה הנבחרת
  const [selectedCategory, setSelectedCategory] = useState(category);

  // לוגיקת סינון הבשמים לפי הקטגוריה הנבחרת
  const filteredPerfumes =
    selectedCategory.toLowerCase() === "all"
      ? perfumes
      : perfumes.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  // בחירת הכותרת המתאימה לפי הקטגוריה הנבחרת
  const title =
    selectedCategory.toLowerCase() === "all"
      ? "Discover All Our Perfumes"
      : `Category: ${selectedCategory}`;

  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">{title}</h1>

      {category.toLowerCase() === "all" && (
        <div className="containerBtns">
          <button className="btn" onClick={() => setSelectedCategory("all")}>
            All
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Men")}>
            Men
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Women")}>
            Women
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Unisex")}>
            Unisex
          </button>
        </div>
      )}
      <div className="filterContainer">
        <div className="resultFilter">
          <p>result : {filteredPerfumes.length}</p>
        </div>
        <div className="filterIcon">
          <p>Icon filter</p>
        </div>
      </div>

      <div className="grid4">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))
        ) : (
          <p>No perfumes found in this category.</p>
        )}
      </div>
    </div>
  );
}
