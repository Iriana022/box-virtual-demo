import { Link } from "react-router-dom";

export default function BoxCard({ id, title, category }) {
  return (
    <div className="card m-2" style={{ width: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle mb-2 text-muted">{category}</p>
        <Link to={`/box/${id}`} className="btn btn-primary">
          Voir les produits
        </Link>
      </div>
    </div>
  );
}
