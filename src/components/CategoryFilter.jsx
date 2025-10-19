
export default function CategoryFilter({ categories, selectedCategories, onChange }) {
  return (
    <div className="mb-3">
      <h5>Filtrer par catégorie :</h5>
      {categories.map((cat, idx) => (
        <div className="form-check form-check-inline" key={idx}>
          <input
            className="form-check-input"
            type="checkbox"
            id={`cat-${idx}`}
            checked={selectedCategories.includes(cat)}
            onChange={() => onChange(cat)}
          />
          <label className="form-check-label" htmlFor={`cat-${idx}`}>{cat}</label>
        </div>
      ))}
    </div>
  );
}