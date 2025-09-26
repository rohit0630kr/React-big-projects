import styles from "./App.module.css";
import AppProvider from "./components/AppProvider";

import PlayerArea from "./features/player/PlayerArea";
import VillegeArea from "./features/villeger/VillegeArea";
import Modal from "./ui/Modal";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.overlay}>
        <AppProvider>
          <Modal />
          <VillegeArea />
          <PlayerArea />
        </AppProvider>
      </div>
    </div>
  );
}
