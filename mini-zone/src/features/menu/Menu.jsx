import { useDispatch, useSelector } from "react-redux";
import styles from "./Menu.module.css";
import { searchInput } from "../../store/productSlice";

function Menu() {
  const { categories } = useSelector((store) => store.products.available);
  const dispatch = useDispatch();

  function handleFilter(option) {
    dispatch(searchInput(option));
  }

  return (
    <nav className={styles.navigation}>
      <p className={styles.navigation_item} onClick={() => handleFilter("all")}>
        All
      </p>
      {categories?.map((category) => {
        return (
          <p
            className={styles.navigation_item}
            onClick={() => handleFilter(category)}
          >
            {category}
          </p>
        );
      })}
    </nav>
  );
}

export default Menu;
