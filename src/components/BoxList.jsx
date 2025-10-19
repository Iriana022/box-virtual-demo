import BoxCard from "./BoxCard";
import { mockBoxes } from "../mockBoxes";

export default function BoxList() {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {mockBoxes.map((box) => (
        <BoxCard
          key={box.id}
          id={box.id}
          title={box.title}
          category={box.category}
          // pour le MVP mock, on n'affiche pas encore les produits ici
        />
      ))}
    </div>
  );
}

