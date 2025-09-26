import { Link } from "react-router-dom";
import styles from "./Selector.module.css";

export default function Selector({ options, title, onSelect }) {
  return (
    <div className={styles.selectorContainer}>
      <h2 className="selector-title">{title}</h2>
      <div className={styles.selectorGrid}>
        {options.map((option) => (
          <Link to="pokedex" key={option.id}>
            <button
              className={styles.selectorButton}
              onClick={() => onSelect(option.id)}
            >
              <img
                src={option.image}
                alt={option.name}
                className={styles.selectorImage}
              />
              <span className={styles.selectorName}>
                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
