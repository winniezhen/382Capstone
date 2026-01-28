import { Link } from "react-router-dom";

function CartView({ cart }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((sauce, index) => (
            <li key={index}>
              <strong>{sauce.name}</strong>
              <div>Ingredients: {sauce.ingredients.join(", ")}</div>
            </li>
          ))}
        </ul>
      )}

      <Link to="/catalog">
        <button>Back to Catalog</button>
      </Link>
    </div>
  );
}

export default CartView;
