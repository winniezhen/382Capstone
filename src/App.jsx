import { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import ProductCatalog from "./components/ProductCatalog";
import CartView from "./components/CartView";
import "./App.css";

function App() {
  const [view, setView] = useState("admin");

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

  function toggleAvailability(id) {
    setSauces(
      sauces.map((sauce) =>
        sauce.id === id ? { ...sauce, available: !sauce.available } : sauce,
      ),
    );
  }

  function addSauce(newSauce) {
    setSauces([...sauces, newSauce]);
  }
  function addToCart(sauce) {
    setCart([...cart, sauce]);
  }

  // Old View Switcher
  // function switchView() {
  //   setView(view === "admin" ? "catalog" : "admin");
  // }

  // New View Switcher
  function switchView(newView) {
    setView(newView);
  }

  return (
    <div className="container">
      <h1>Zen Sauce Dashboard</h1>

      {view === "admin" && (
        <AdminDashboard
          sauces={sauces}
          onToggle={toggleAvailability}
          onAddSauce={addSauce}
          onSwitchView={() => switchView("catalog")}
        />
      )}

      {view === "catalog" && (
        <ProductCatalog
          sauces={sauces}
          onAddToCart={addToCart}
          onViewCart={() => switchView("cart")}
          onBackAdmin={() => switchView("admin")}
        />
      )}

      {view === "cart" && (
        <CartView cart={cart} onBackCatalog={() => switchView("catalog")} />
      )}
    </div>
  );
}

export default App;
