import {
  openCrafting,
  openInventory,
  useApp,
} from "../../components/AppActions";
import Button from "../../ui/Button";
import styles from "./PlayerArea.module.css";

export default function PlayerArea() {
  const { player, dispatch } = useApp();

  function handleOpenInventory() {
    dispatch(openInventory({ isPlayer: true }));
  }

  function handleCrafting() {
    dispatch(openCrafting());
  }

  return (
    <div className={styles.playerBox}>
      <h2>🧑 You ({player.name})</h2>
      <p>Level: {player.level}</p>
      <div className={styles.playerActions}>
        <Button onClick={handleOpenInventory}>🎒 Inventory</Button>
        <Button onClick={handleCrafting}>📜 Construct</Button>
        {/* <button className={styles.btn}>⚙️ Settings</button> */}
      </div>
    </div>
  );
}
