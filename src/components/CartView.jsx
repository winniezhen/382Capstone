function CartView({ cart, onBackCatalog }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}

      <button onClick={onBackCatalog}>Back to Catalog</button>
    </div>
  );
}

export default CartView;
