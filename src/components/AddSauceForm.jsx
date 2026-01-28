import { useState } from "react";

function AddSauceForm({ onAddSauce }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newSauce = {
      id: Date.now(),
      name,
      ingredients: ingredients.split(",").map(i => i.trim()),
      available: true
    };

    onAddSauce(newSauce);

    setName("");
    setIngredients("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Sauce</h3>

      <input
        placeholder="Sauce name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button type="submit">Add Sauce</button>
    </form>
  );
}

export default AddSauceForm;
