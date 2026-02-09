import { useState } from "react";

export default function AddForm({ onAdd, errorMessage }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(name, quantity);

  
    setName("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Legg til ny vare</legend>

        <label>
          Vare:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="f.eks. Tomater"
          />
        </label>

        <label>
          Antall:
          <input className="qty-input"
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="1"
          />
        </label>

        <button type="submit">Legg til</button>

        {errorMessage ? (
          <p role="alert" aria-live="polite">
            {errorMessage}
          </p>
        ) : null}
      </fieldset>
    </form>
  );
}
