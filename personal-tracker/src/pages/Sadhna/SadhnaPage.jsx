import styles from "./SadhnaPage.module.css";
import SadhnaInput from "./SadhnaInput";
import SadhnaHistory from "./SadhnaHistory";

function SadhnaPage() {
  return (
    <div className={styles.container}>
      <SadhnaInput />
      <SadhnaHistory />
    </div>
  );
}

export default SadhnaPage;
