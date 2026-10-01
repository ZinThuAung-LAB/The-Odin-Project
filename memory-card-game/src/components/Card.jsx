import "../styles/Card.css";

export function Card({ id, name, imageUrl, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={name} loading="lazy" />
      </div>
      <p className="card-title">{name}</p>
    </div>
  );
}
