"use client";
import { use, useState, useEffect } from "react"; // הוספנו useEffect
import { perfumes } from "../../lib/perfume";
import PerfumeCard from "../../components/Card";
import "../../pageCategory.css";

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
      ? "כל הבשמים שלנו"
      : `קטגוריה: ${selectedCategory}`;

  return (
    <div className="pageWrapper" dir="rtl">
      <h1 className="pageTitle">{title}</h1>

      {category.toLowerCase() === "all" && (
        <div className="containerBtns">
          <button className="btn" onClick={() => setSelectedCategory("all")}>
            הכל
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Men")}>
            גברים 👨
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Women")}>
            נשים 👩
          </button>
          <button className="btn" onClick={() => setSelectedCategory("Unisex")}>
            יוניסקס ✨
          </button>
        </div>
      )}
      <div className="grid4">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))
        ) : (
          <p>לא נמצאו בשמים בקטגוריה זו.</p>
        )}
      </div>
    </div>
  );
}
