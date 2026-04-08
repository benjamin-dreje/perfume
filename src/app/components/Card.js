import "./card.css";

export default function Card({ perfume }) {
  const { title, info, price, image } = perfume;

  return (
    <div className="card">
      {/* עטיפה לתמונה כדי לשמור על גובה קבוע */}
      <div className="imageWrapper">
        <img className="image" src={image} alt={title ?? "Card image"} />
      </div>

      <div className="cardInfo">
        <h3 className="title">{title}</h3>
        <p className="info">{info}</p>
        {/* שימוש ב-span או div למחיר כדי למנוע מרג'ינים של h2 */}
        <div className="price">${price}</div>
      </div>

      <div className="cardButton">
        <button className="add">Add</button>
        <button className="details">Details</button>
      </div>
    </div>
  );
}
