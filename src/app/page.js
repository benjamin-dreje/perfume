import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="heroSection">
        <div className="containerHome">
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
        <div className="title">
            <h3 className="titleH">Explore Our Categories</h3>
          </div>
        <div className="cardContainer">
          
          <article className="card">
            <Link href="/product/men" className="cardLink">
              <img src="/menCategory.jpg" alt="Men's Perfume" />
              <div className="cardContent">
                <h3>Men's Perfume</h3>
                <p>Discover our  collection for men</p>
              </div>
            </Link>
          </article>

          <article className="card">
            <Link href="/product/women" className="cardLink">
              <img src="/womenCategory.jpg" alt="Women's Perfume" />
              <div className="cardContent">
                <h3>Women's Perfume</h3>
                <p>Discover our  collection for women</p>
              </div>
            </Link>
          </article>

          <article className="card">
            <Link href="/product/unisex" className="cardLink">
              <img src="/UnisexCategory.jpg" alt="Unisex Perfume" />
              <div className="cardContent">
                <h3>Unisex Perfume</h3>
                <p>Discover our  collection for everyone</p>
              </div>
            </Link>
          </article>

          <article className="card all-perfumes-card">
            <Link href="/product/all" className="cardLink">
              <div className="cardContent">
                <h2>All Perfume</h2>
                <p>Discover our  collection for everyone</p>
              </div>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
