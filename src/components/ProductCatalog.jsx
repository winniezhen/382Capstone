function ProductCatalog({ sauces, onAddToCart, onViewCart, onBackAdmin }) {
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

      <button onClick={onViewCart}>View Cart</button>
      <button onClick={onBackAdmin}>Back to Admin</button>
    </div>
  );
}

export default ProductCatalog;
