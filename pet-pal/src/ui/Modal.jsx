import styles from "./Modal.module.css";

export default function Modal({ message, onNewGame, onLoadGame }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeButton} onClick={onLoadGame}>
          Load game
        </button>
        <button className={styles.closeButton} onClick={onNewGame}>
          Start new game
        </button>
      </div>
    </div>
  );
}
