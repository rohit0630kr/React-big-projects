import React, { useState } from "react";
import styles from "./VersePage.module.css";
import { useSelector } from "react-redux";
import VerseTab from "./VerseTab";
import VerseList from "./VerseList";
import VerseDetails from "./VerseDetails";
import VerseAddForm from "./VerseAddForm";

const VersePage = () => {
  const [isVerseFormOpen, setIsVerseFormOpen] = useState(false);
  const [isRememberedTabSelected, setIsRememberedTabSelected] = useState(true);
  const { verses } = useSelector((store) => store);
  const [selectedVerse, setSelectedVerse] = useState(null);

  const verse = isRememberedTabSelected
    ? verses.filter((el) => el.isRemembered)
    : verses.filter((el) => !el.isRemembered);

  const verseFormOpenHandler = function () {
    setIsVerseFormOpen(true);
  };

  const verseFormCloseHandler = function () {
    setIsVerseFormOpen(false);
  };

  const TabToggleHandler = function () {
    setIsRememberedTabSelected((r) => !r);
    setSelectedVerse(null);
  };

  const verseSelectingHandler = function (verse) {
    setSelectedVerse(verse);
  };

  return (
    <div className={styles.container}>
      {isVerseFormOpen && (
        <VerseAddForm onVerseFormClose={verseFormCloseHandler} />
      )}

      <VerseTab
        isRemeberedActive={isRememberedTabSelected}
        onToggleTab={TabToggleHandler}
      />

      <div className={styles.content}>
        <VerseList
          selectedVerseId={selectedVerse?.id}
          verses={verse}
          onSelectingVerse={verseSelectingHandler}
          isRememberedActive={isRememberedTabSelected}
        />
        <VerseDetails selectedVerseId={selectedVerse?.id} />
      </div>
      <button onClick={verseFormOpenHandler} className={styles.verseAddBtn}>
        Add Verse
      </button>
    </div>
  );
};

export default VersePage;
