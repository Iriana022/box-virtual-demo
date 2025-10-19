import { useParams, Link } from "react-router-dom";
import { mockBoxes } from "../mockBoxes";
import { useState } from "react";

export default function BoxDetail() {
  const { id } = useParams();
  const box = mockBoxes.find((b) => b.id === parseInt(id));

  const [cart, setCart] = useState([]); // panier local

  if (!box) return <h2>Box non trouvée</h2>;

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  //effacer un produit
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1); // retire l'élément
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="container mt-4">
      <h2>{box.title}</h2>
      <p className="text-muted">{box.category}</p>

      <ul className="list-group mb-3">
        {box.products.map((p, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {p.qty} × {p.name} - {p.price} Ar 
                
            </div>
            <button className="btn btn-success btn-sm" onClick={() => addToCart(p)}>
              Commander
            </button>
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <div className="mb-3">
          <h5>Panier :</h5>
          <ul className="list-group mb-2">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item">
                {item.qty} × {item.name} - {item.price} Ar&emsp;
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(i)}>
                  x
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total panier : {totalPrice} Ar</strong></p>
          <button className="btn btn-primary">Passer au commande</button>
        </div>
      )}

      <Link to="/" className="btn btn-secondary mt-3">Retour aux boxes</Link>
    </div>
  );
}
