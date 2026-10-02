import "../styles/Card.css";

export function Card({ id, name, imageUrl, onClick }) {
  return (
    <button className="card" type="button" onClick={() => onClick(id)} aria-label={`Choose ${name}`}>
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={name} loading="lazy" />
      </div>
      <p className="card-title">{name}</p>
    </button>
  );
}
