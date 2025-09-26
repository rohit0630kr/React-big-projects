import { useSelector } from "react-redux";
import styles from "./VerseList.module.css";

function VerseList({
  isRememberedActive,
  verses,
  selectedVerseId,
  onSelectingVerse,
}) {
  // const { verses } = useSelector((store) => store);
  const selectedVerse = verses.find((el) => el.id === selectedVerseId);

  return (
    <div className={styles.list}>
      <h2>{isRememberedActive ? "Remembered Verses" : "To-Remember Verses"}</h2>
      <ul>
        {verses.map((verse) => (
          <li
            key={verse.id}
            className={`${styles.listItem} ${
              selectedVerse?.id === verse.id ? styles.selected : ""
            }`}
            onClick={() => onSelectingVerse(verse)}
          >
            {verse.title} ({verse.address})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerseList;
