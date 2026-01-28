import { useState } from "react";

function Checkout({ cart }) {
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <h3>Your Order</h3>

      {cart.length === 0 && <p>No items yet.</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <input
        placeholder="Your name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <button
        onClick={() =>
          alert(`Order placed by ${customerName}!`)
        }
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
