import styles from "./VerseTab.module.css";

function VerseTab({ onToggleTab, isRemeberedActive }) {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${isRemeberedActive ? styles.active : ""}`}
        onClick={onToggleTab}
      >
        Remembered
      </button>
      <button
        className={`${styles.tab} ${isRemeberedActive ? "" : styles.active}`}
        onClick={onToggleTab}
      >
        To-Remember
      </button>
    </div>
  );
}

export default VerseTab;
