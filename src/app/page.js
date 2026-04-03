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
    <div className="pageWrapper" dir="rtl">
      <h1 className="pageTitle"> Everyone deserves their own unique scent </h1>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setSelectedCategory("All")}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        ></button>

        <button
          onClick={() => setSelectedCategory("Men")}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          גברים 👨
        </button>

        <button
          onClick={() => setSelectedCategory("Women")}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          נשים 👩
        </button>

        <button
          onClick={() => setSelectedCategory("Unisex")}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
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
