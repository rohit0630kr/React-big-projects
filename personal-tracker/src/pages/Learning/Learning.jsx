import styles from "./Learning.module.css";

function Learning() {
  return (
    <div className={styles.learning}>
      <h2 className={styles.heading}>📚 Today's Learning</h2>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>📖 Book Reading</h3>
          <p>Read 12 pages of "Bhagavad Gita"</p>
        </div>

        <div className={styles.card}>
          <h3>💻 Coding Practice</h3>
          <p>Solved 2 React problems</p>
        </div>

        <div className={styles.card}>
          <h3>📝 Lecture Notes</h3>
          <p>Reviewed Chapter 3 of DBMS</p>
        </div>

        <div className={styles.card}>
          <h3>🎧 Video Learning</h3>
          <p>Watched 1hr of Web Dev tutorial</p>
        </div>
      </div>
    </div>
  );
}

export default Learning;
