import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";

import Footer from "../../features/footer/Footer";
import Navigation from "../../features/Navigation/Navigation";

function AppLayout() {
  return (
    <div className={styles.applayout}>
      <Navigation />
      <div className={styles.page}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
