import ShoppingItem from "./ShoppingItem.jsx";
import "../style/layout.scss";

export default function ShoppingList({ items, onToggleBought, onQuantityChange }) {
  return (
    <article>
      <h2>Varer</h2>

      {items.length === 0 ? <p>Ingen varer i listen.</p> : null}

      <ul className="list">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </ul>
    </article>
  );
}
