import { useState } from "react";
import styles from "./VerseAddForm.module.css";
import { useDispatch } from "react-redux";
import { addVerse } from "../../store/reducer";
import Button from "../../components/UI/Button";
import { getVerseTitle } from "../../components/UTILS/getVerseTitle";

function VerseAddForm({ onVerseFormClose }) {
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [verse, setVerse] = useState("");
  const [hindiMeaning, setHindiMeaning] = useState("");
  const [englishMeaning, setEnglishMeaning] = useState("");
  const [description, setDescription] = useState("");
  const [book, setBook] = useState("");
  const [remarks, setRemarks] = useState("");

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const data = {
      title: getVerseTitle(verse),
      isRemembered: false,
      id: Date.now(),
      address,
      sanskrit: verse,
      english: englishMeaning,
      hindi: hindiMeaning,
      description,
    };
    dispatch(addVerse(data));
  };

  const addressChangeHandler = function (e) {
    setAddress(e.target.value);
  };

  const verseChangeHandler = function (e) {
    setVerse(e.target.value);
  };

  const hindiMeaningChangeHandler = function (e) {
    setHindiMeaning(e.target.value);
  };

  const englishMeaningChangeHandler = function (e) {
    setEnglishMeaning(e.target.value);
  };

  const descriptionChangeHandler = function (e) {
    setDescription(e.target.value);
  };

  const bookChangeHandler = function (e) {
    setBook(e.target.value);
  };

  const remarksChangeHandler = function (e) {
    setRemarks(e.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Verse</h2>
        <form className={styles.form}>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={addressChangeHandler}
            />
          </label>

          <label>
            verse:
            <textarea value={verse} onChange={verseChangeHandler} />
          </label>

          <label>
            Hindi meaning:
            <textarea
              value={hindiMeaning}
              onChange={hindiMeaningChangeHandler}
            />
          </label>

          <label>
            English meaning:
            <textarea
              value={englishMeaning}
              onChange={englishMeaningChangeHandler}
            />
          </label>

          <label>
            Description:
            <textarea value={description} onChange={descriptionChangeHandler} />
          </label>

          <label>
            Book
            <input type="text" value={book} onChange={bookChangeHandler} />
          </label>
          {/* <label>
            Book:
            <select>
              <option>Bhagavad Gita</option>
              <option>Srimad Bhagavatam</option>
              <option>Caitanya Caritamrita</option>
              <option>Other</option>
            </select>
          </label> */}

          <label>
            Remarks:
            <textarea value={remarks} onChange={remarksChangeHandler} />
          </label>

          <div className={styles.actions}>
            <Button onClick={onVerseFormClose}>Close</Button>
            <Button onClick={formSubmitHandler}>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerseAddForm;
