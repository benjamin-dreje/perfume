import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="heroSection">
        <div className="containerHome">
          <div className="homeImage">
            <img src="/perfumehero111.jpg" alt="Perfume" />
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
          <h2 className="titleH">Explore Our Categories</h2>
        </div>
        <div className="cardContainer">
          <article className="card">
            <Link href="/product/men" className="cardLink">
              <img src="/menCategory.jpg" alt="Men's Perfume" />
              <div className="cardContent">
                <h3>Men's Perfume</h3>
                <p>Discover our collection for men</p>
              </div>
            </Link>
          </article>

          <article className="card">
            <Link href="/product/women" className="cardLink">
              <img src="/womenCategory.jpg" alt="Women's Perfume" />
              <div className="cardContent">
                <h3>Women's Perfume</h3>
                <p>Discover our collection for women</p>
              </div>
            </Link>
          </article>

          <article className="card">
            <Link href="/product/unisex" className="cardLink">
              <img src="/unisex.jpg" alt="Unisex Perfume" />
              <div className="cardContent">
                <h3>Unisex Perfume</h3>
                <p>Discover our collection for uinisex</p>
              </div>
            </Link>
          </article>

          <article className="card all-perfumes-card">
            <Link href="/product/all" className="cardLink">
              <div className="cardContent">
                <h2>All Perfumes</h2>
                <p>Discover our collection for everyone</p>
              </div>
            </Link>
          </article>
        </div>
      </section>

      <section>
        <div className="section-2-container">
          <article className="section-2-card-left"></article>
          <article className="section-2-card-right"></article>
        </div>
      </section>

      <section className="whyUsSection">
        <div className="title">
          <h2 className="titleH">Why Choose Us</h2>
        </div>

        <div className="whyUsContainer">
          <div className="whyUsCard">
            <div className="whyUsIcon">
              <i className="fa-solid fa-gem"></i>
            </div>
            <h3>100% Original</h3>
            <p>
              We source our fragrances directly from official distributors to
              guarantee authenticity.
            </p>
          </div>

          <div className="whyUsCard">
            <div className="whyUsIcon">
              <i className="fa-solid fa-truck-fast"></i>{" "}
            </div>
            <h3>Fast Shipping</h3>
            <p>
              Your signature scent will be delivered safely and quickly straight
              to your doorstep.
            </p>
          </div>

          <div className="whyUsCard">
            <div className="whyUsIcon">
              <i className="fa-solid fa-headset"></i>{" "}
            </div>
            <h3>Premium Support</h3>
            <p>
              Our fragrance experts are always here to help you find your
              perfect match.
            </p>
          </div>
        </div>
      </section>

      <section className="reviewsSection">
        <div className="title">
          <h2 className="titleH">What Our Customers Say</h2>
        </div>
        <div className="reviewsContainer">
          <div className="reviewCard">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="reviewText">
              "Absolute perfection. The scent lasts all day and I constantly get
              compliments. Shipping was incredibly fast!"
            </p>
            <h4 className="reviewerName">- Sarah M.</h4>
          </div>

          <div className="reviewCard">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="reviewText">
              "Finding a signature scent online is hard, but their curation is
              spot on. The unisex perfume I bought is amazing."
            </p>
            <h4 className="reviewerName">- David K.</h4>
          </div>

          <div className="reviewCard">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="reviewText">
              "100% original, beautifully packaged, and premium customer
              service. Will definitely order my next bottle here."
            </p>
            <h4 className="reviewerName">- Emma L.</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
