import { useDispatch, useSelector } from "react-redux";
import styles from "./NotesPage.module.css";
import { addNotes, removeNotes } from "../../store/reducer";
import { useState } from "react";

function NotesPage() {
  const { notesData } = useSelector((store) => store);
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();
  console.log(notesData);

  const notesChangeHandler = function (e) {
    setNotes(e.target.value);
  };

  const notesAddHandler = function () {
    const data = {
      date: new Date().toLocaleDateString(),
      text: notes,
      id: Date.now(),
    };

    dispatch(addNotes(data));
  };

  const notesDeleteHandler = function (id) {
    dispatch(removeNotes(id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📝 Notes</h2>

      <textarea
        className={styles.textarea}
        value={notes}
        onChange={notesChangeHandler}
        placeholder="Write your thoughts here..."
      />

      <button className={styles.saveBtn} onClick={notesAddHandler}>
        Save Note
      </button>

      <ul className={styles.notesList}>
        {notesData.map((notes) => (
          <li className={styles.noteItem}>
            {notes.text}{" "}
            <button
              onClick={() => notesDeleteHandler(notes.id)}
              className={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesPage;
