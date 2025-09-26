import SearchQuery from "./SearchQuery";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>MiniZon</div>
      <SearchQuery />
      <div className={styles.cart}>🛒 Cart (0)</div>
    </nav>
  );
}

export default Navigation;
