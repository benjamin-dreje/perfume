import "./about.css";

const HIGHLIGHTS = [
  {
    title: "Balanced Fragrance Notes",
    description:
      "Thoughtfully layered top, heart, and base notes crafted to evolve naturally on the skin.",
  },
  {
    title: "Lasting Presence",
    description:
      "Refined formulations available in multiple bottle sizes for everyday wear, work, and evening occasions.",
  },
  {
    title: "Seamless Shopping Experience",
    description:
      "Clear comparison of scent profiles, sizes, and pricing with smooth cart management from any device.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <span className="about-eyebrow">THE ART OF SCENT</span>
        <h1>About Our Collection</h1>
        <p className="about-lead">
          We believe a great fragrance is a personal signature that captures
          moods, moments, and memories. Our curated collection brings together
          fresh, woody, citrus, and aromatic scents in one refined destination.
        </p>
      </header>

      <div className="about-grid">
        <section className="about-card" aria-labelledby="vision-heading">
          <h2 id="vision-heading">Our Approach to Fragrance</h2>
          <p>
            Every perfume in our catalog is selected with versatility and
            character in mind—from crisp, effortless daily scents to deeper,
            more expressive compositions. Our goal is to make discovering your
            next signature fragrance simple, transparent, and enjoyable.
          </p>
        </section>

        <section className="about-card" aria-labelledby="highlights-heading">
          <h2 id="highlights-heading">What Defines Our Store</h2>
          <ul className="about-list">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}