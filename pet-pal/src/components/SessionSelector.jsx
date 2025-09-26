import styles from "./SessionSelector.module.css";

export default function SessionSelector({ onContinue, onNewGame }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back, Trainer!</h1>
        <p className={styles.subtitle}>
          Would you like to continue your previous journey or begin a new
          adventure?
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.continueBtn} onClick={onContinue}>
            🔄 Continue Session
          </button>
          <button className={styles.newBtn} onClick={onNewGame}>
            ✨ Start New Game
          </button>
        </div>
      </div>
    </div>
  );
}
