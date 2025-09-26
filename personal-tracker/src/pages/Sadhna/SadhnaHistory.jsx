import styles from "./SadhnaHistory.module.css";
import { useSelector } from "react-redux";

function SadhnaHistory() {
  const { sadhnaData } = useSelector((store) => store);
  const today = new Date().toLocaleDateString();
  const YES = "✅";
  const NO = "❌";

  return (
    <div>
      <h3 className={styles.historyTitle}>📜 Previous Days</h3>
      <ul className={styles.historyList}>
        {sadhnaData?.map((el) => (
          <li className={styles.historyItem}>
            <p>{el.date === today ? "Today's sadhna" : el.date}</p>
            <span>
              Reading: {el.readingTopic} {el.isReadingDone ? YES : NO}
            </span>
            <span>
              Hearing: {el.hearingTopic} {el.isHearingDone ? YES : NO}
            </span>
            <span>16 Round {el.isChantingDone ? YES : NO}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SadhnaHistory;
