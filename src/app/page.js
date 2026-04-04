"use client";
import { useState } from "react";
import "./page.css";
import { perfumes } from "./lib/perfume";
import PerfumeCard from "./components/Card"; // ייבוא הקומפוננטה

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // פונקציית עזר קטנה לסינון (נשארת פשוטה)
  const filteredPerfumes =
    selectedCategory === "All"
      ? perfumes
      : perfumes.filter((p) => p.category === selectedCategory);

  return (
    <div className="pageWrapper">
      <h1 className="pageTitle"> Everyone deserves their own unique scent </h1>
      <div className="containerBtns">
        <button className="btn" onClick={() => setSelectedCategory("All")}>
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

      <div className="grid4">
        {filteredPerfumes.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
}
