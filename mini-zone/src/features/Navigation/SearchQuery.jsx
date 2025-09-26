import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchQuery.module.css";
import { useState } from "react";
import { searchInput } from "../../store/productSlice";

function SearchQuery() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  function handleQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleQuerySubmit(e) {
    e.preventDefault();

    dispatch(searchInput(searchQuery));
    setSearchQuery("");
  }

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleQuerySubmit}>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchBarInput}
          onChange={handleQueryChange}
          value={searchQuery}
        />
        <button type="submit" className={styles.searchButton}>
          🔍
        </button>
      </form>
    </div>
  );
}

export default SearchQuery;
