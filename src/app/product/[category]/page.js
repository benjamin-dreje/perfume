"use client";
import { use, useState, useEffect } from "react"; // הוספנו useEffect
import { perfumes } from "../../lib/perfume";
import PerfumeCard from "../../components/Card";
import "../../page.css";

export default function CategoryPage({ params }) {
  const { category } = use(params);
  
  // 1. ה-State מתחיל לפי מה שכתוב ב-URL (הופכים לאות גדולה לתצוגה יפה)
  const [selectedCategory, setSelectedCategory] = useState(category);

  // 2. לוגיקת הסינון משתמשת ב-State
  const filteredPerfumes = selectedCategory.toLowerCase() === "all"
    ? perfumes
    : perfumes.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const title = selectedCategory.toLowerCase() === "all"
    ? "כל הבשמים שלנו"
    : `קטגוריה: ${selectedCategory}`;

  return (
    <div className="pageWrapper" dir="rtl">
      <h1 className="pageTitle">{title}</h1>
      
      {category.toLowerCase() === "all" && (
      <div className="containerBtns">
        {/* הכפתורים עכשיו מעדכנים את ה-State והסינון קורה מיד */}
        <button className="btn" onClick={() => setSelectedCategory("all")}>הכל</button>
        <button className="btn" onClick={() => setSelectedCategory("Men")}>גברים 👨</button>
        <button className="btn" onClick={() => setSelectedCategory("Women")}>נשים 👩</button>
        <button className="btn" onClick={() => setSelectedCategory("Unisex")}>יוניסקס ✨</button>
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