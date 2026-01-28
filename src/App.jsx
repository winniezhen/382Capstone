import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import ProductCatalog from "./components/ProductCatalog";
import CartView from "./components/CartView";
import "./App.css";

function App() {
  const [sauces, setSauces] = useState([
    {
      id: 1,
      name: "Sesame Sauce",
      ingredients: ["soy sauce", "sesame paste", "rice vinegar", "sugar"],
      available: true,
    },
    {
      id: 2,
      name: "Pink Sauce",
      ingredients: ["mayo", "rice vinegar", "sugar", "soy sauce"],
      available: false,
    },
  ]);

  const [cart, setCart] = useState([]);

  // Toggle sauce availability (Admin)
  function toggleAvailability(id) {
    setSauces(
      sauces.map((sauce) =>
        sauce.id === id ? { ...sauce, available: !sauce.available } : sauce
      )
    );
  }

  // Add a new sauce (Admin)
  function addSauce(newSauce) {
    setSauces([...sauces, newSauce]);
  }

  // Add sauce to cart (Customer)
  function addToCart(sauce) {
    setCart([...cart, sauce]);
  }

  return (
    <div className="container">
      <h1>Zen Sauce Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="/admin">Admin</Link> |{" "}
        <Link to="/catalog">Catalog</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminDashboard
              sauces={sauces}
              onToggle={toggleAvailability}
              onAddSauce={addSauce}
            />
          }
        />

        <Route
          path="/catalog"
          element={
            <ProductCatalog
              sauces={sauces}
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={<CartView cart={cart} />}
        />

        {/* Default route */}
        <Route path="*" element={<p>Select a view above.</p>} />
      </Routes>
    </div>
  );
}

export default App;
