
import "../style/shoppingitem.scss"
export default function ShoppingItem({ item, onToggleBought, onQuantityChange }) {
  const labelId = `item-${item.id}`;

  function handleQuantityInput(e) {
  
    const raw = e.target.value;

   
    if (raw === "") return;

    onQuantityChange(item.id, raw);
  }

  return (
    <li>
      <article className="shoppingitem" aria-labelledby={labelId}>
        <header>
          <h3 id={labelId}>
            {item.bought ? <s>{item.name}</s> : item.name}
          </h3>
        </header>

        <section aria-label="Status og antall">
          <label>
            Kjøpt:
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => onToggleBought(item.id)}
            />
          </label>

          <label>
            Antall:
            <input className="qty-input"
              type="number"
              min="1"
              step="1"
              value={item.quantity}
              onChange={handleQuantityInput}
            />
          </label>
        </section>
      </article>
    </li>
  );
}
