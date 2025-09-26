import { useDispatch, useSelector } from "react-redux";
import { deleteVerse, updateVerseStatus } from "../../store/reducer";
import styles from "./VerseDetails.module.css";
import Button from "../../components/UI/Button";

function VerseDetails({ selectedVerseId }) {
  console.log(selectedVerseId);
  const dispatch = useDispatch();
  const { verses } = useSelector((store) => store);
  const selectedVerse = verses?.find((el) => el.id === selectedVerseId);
  const verseStatusUpdateHandler = function (id) {
    dispatch(updateVerseStatus(id));
  };

  const verseDeleteHandler = function (id) {
    dispatch(deleteVerse(id));
  };

  return (
    <div className={styles.details}>
      {selectedVerse ? (
        <>
          <h2>{selectedVerse.title}</h2>
          <p className={styles.address}>{selectedVerse.address}</p>
          <pre className={styles.sanskrit}>{selectedVerse.sanskrit}</pre>
          <h3>English Meaning</h3>
          <p>{selectedVerse.english}</p>
          <h3>Hindi Meaning</h3>
          <p>{selectedVerse.hindi}</p>
          <h3>Description</h3>
          <p>{selectedVerse.description}</p>
          <input
            type="checkbox"
            onChange={() => verseStatusUpdateHandler(selectedVerse.id)}
            checked={selectedVerse.isRemembered}
          />{" "}
          Remembered
          <Button onClick={() => verseDeleteHandler(selectedVerse.id)}>
            delete
          </Button>
        </>
      ) : (
        <p className={styles.placeholder}>Select a verse to view details</p>
      )}
    </div>
  );
}

export default VerseDetails;
