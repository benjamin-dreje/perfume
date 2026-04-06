
import "./page.css";

export default function Home() {
  return (
    <main>
      <section className="heroSection">
        <div className="containerHome">
          {/* <div className="homeText">
            <div className="info">
              <h1>Everyone Deserves Their Own Signature Scent</h1>
              <p>
                "We believe a fragrance is more than just a scent—it’s a
                personal signature. Discover a curated collection of rare
                fragrances, carefully selected to express who you truly are."
              </p>
            </div>
            <div className="homeBtns">
              <button>Shop Now</button>
            </div>
          </div> */}

          <div className="homeImage">
            <img src="/heroImage.png" alt="Perfume" />
          </div>
          <div className="homeText">
            <div className="info">
              <h1>Everyone Deserves Their Own Signature Scent</h1>
              <p>
                "We believe a fragrance is more than just a scent—it’s a
                personal signature. Discover a curated collection of rare
                fragrances, carefully selected to express who you truly are."
              </p>
            </div>
            <div className="homeBtns">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="categorySection">
        <h2>הקטגוריות שלנו</h2>
        <div className="cards-container">
          <article>
            <h3>מוצרי חשמל</h3>
            <p>כל המכשירים הכי מתקדמים לבית שלכם.</p>
            <a href="/electronics">לצפייה בקטגוריה</a>
          </article>

          <article>
            <h3>ריהוט לגן</h3>
            <p>מגוון רחב של פינות ישיבה מעץ מלא.</p>
            <a href="/garden">לצפייה בקטגוריה</a>
          </article>
        </div>
      </section>
    </main>
  );
}
