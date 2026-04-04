
import "./card.css";
export default function Card({ perfume }) {

const { title, info, price , image } = perfume;

  return (
    <div className="card">
      <img className="image" src={image} alt={title ?? "Card image"} />
      <div className="cardInfo">
        <h3 className="title">{title}</h3>
        <p className="info">{info}</p>
        <h2 className="price">{price}</h2>
      </div>
      <div className="cardButton">
        <button className="add">Add</button>
        <button className="details">Details</button>
      </div>
    </div>
  );
}
