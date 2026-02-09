// AI-bruk: Struktur og kodeforslag generert med ChatGPT.

import "./style/add-form.scss";
import { useState } from "react";
import AddForm from "./components/AddForm.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function makeId() {
  return crypto.randomUUID();
}

const initialItems = [
  { id: makeId(), name: "Melk", quantity: 2, bought: true },
  { id: makeId(), name: "Brød", quantity: 1, bought: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [error, setError] = useState("");

  function addItem(name, quantity) {
    const trimmedName = name.trim();

    
    if (!trimmedName && (quantity === "" || quantity === null || quantity === undefined)) {
      setError("Du må skrive inn både varenavn og antall.");
      return;
    }
    if (!trimmedName) {
      setError("Du mangler varenavn.");
      return;
    }
    if (quantity === "" || quantity === null || quantity === undefined) {
      setError("Du mangler antall.");
      return;
    }

    const qty = Number(quantity);

    if (!Number.isFinite(qty) || !Number.isInteger(qty)) {
      setError("Antall må være et heltall.");
      return;
    }
    if (qty <= 0) {
      setError("Antall må være 1 eller mer.");
      return;
    }

    const newItem = {
      id: makeId(),
      name: trimmedName,
      quantity: qty,
      bought: false,
    };

   
    setItems((prev) => [newItem, ...prev]);
    setError("");
  }

  function toggleBought(id) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, bought: !item.bought } : item))
    );
  }

  function updateQuantity(id, nextQuantity) {
    const qty = Number(nextQuantity);

   
    if (!Number.isFinite(qty) || !Number.isInteger(qty) || qty <= 0) return;

    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  }

  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>

      <section aria-label="Legg til vare">
        <AddForm onAdd={addItem} errorMessage={error} />
      </section>

      <section aria-label="Handleliste">
        <ShoppingList
          items={items}
          onToggleBought={toggleBought}
          onQuantityChange={updateQuantity}
        />
      </section>
    </main>
  );
}
