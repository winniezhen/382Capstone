import { useState } from "react";

function AdminDashboard({ sauces, onToggle, onAddSauce, onSwitchView }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleAddSauce = (e) => {
    e.preventDefault();
    if (!name || !ingredients) return;

    const newSauce = {
      id: sauces.length + 1,
      name: name,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      available: true,
    };

    onAddSauce(newSauce);

    // Clear form
    setName("");
    setIngredients("");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <ul>
        {sauces.map((sauce) => (
          <li key={sauce.id}>
            <strong>{sauce.name}</strong>

            <div>Ingredients: {sauce.ingredients.join(", ")}</div>

            <div className={sauce.available ? "available" : "unavailable"}>
              {sauce.available ? "Available" : "Unavailable"}
            </div>

            <button onClick={() => onToggle(sauce.id)}>
              Toggle Availability
            </button>
          </li>
        ))}
      </ul>

      <h3>Add New Sauce</h3>
      <form onSubmit={handleAddSauce}>
        <input
          type="text"
          placeholder="Sauce Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Add Sauce</button>
      </form>

      <button className="switch-button" onClick={onSwitchView}>
        View Customer Catalog
      </button>
    </div>
  );
}

export default AdminDashboard;
