import { Link, Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../../store/reducer";

function AppLayout() {
  const dispatch = useDispatch();

  const saveDataHandler = function () {
    dispatch(saveData());
  };

  return (
    <div className={styles.appContainer}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>📖 My Tracker</h1>
        <Button onClick={saveDataHandler}>Save</Button>
        <ul className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/todo">To-Do</Link>
          {/* <Link to="/learning">Learning</Link> */}
          <Link to="/verse">Verse</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/sadhna">Sadhna</Link>
        </ul>
      </nav>

      {/* Main screen */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 My Tracker • Built with React</p>
      </footer>
    </div>
  );
}

export default AppLayout;
