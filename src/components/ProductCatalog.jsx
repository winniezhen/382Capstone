import { Link } from "react-router-dom";

function ProductCatalog({ sauces, onAddToCart }) {
  return (
    <div>
      <h2>Zen Sauce Catalog</h2>

      <ul>
        {sauces
          .filter((sauce) => sauce.available)
          .map((sauce) => (
            <li key={sauce.id}>
              <strong>{sauce.name}</strong>
              <div>Ingredients: {sauce.ingredients.join(", ")}</div>
              <button onClick={() => onAddToCart(sauce)}>Add to Cart</button>
            </li>
          ))}
      </ul>

      <Link to="/cart">
        <button>View Cart</button>
      </Link>
      <Link to="/admin">
        <button>Back to Admin</button>
      </Link>
    </div>
  );
}

export default ProductCatalog;
