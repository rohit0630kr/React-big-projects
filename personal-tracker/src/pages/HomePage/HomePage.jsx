import { useDispatch, useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import { calcBriefData } from "../../store/reducer";
import { useEffect } from "react";
import SadhnaCard from "./SadhnaCard";
import TodoCard from "./TodoCard";
import VerseCard from "./VerseCard";
import NotesCard from "./NotesCard";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcBriefData());
  }, []);

  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>Today's Progress</h2>

      <div className={styles.cardGrid}>
        {/* To-Do Card */}
        <TodoCard />

        {/* Sadhna Card */}
        <SadhnaCard />

        {/* Verse Card */}
        <VerseCard />

        {/* Notes Card */}
        <NotesCard />
      </div>
    </div>
  );
}

export default HomePage;
