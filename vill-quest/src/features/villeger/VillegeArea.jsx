import { useApp } from "../../components/AppActions";
import Button from "../../ui/Button";
import styles from "./VillegeArea.module.css";

import { openInventory } from "../../components/AppActions";

export default function VillegeArea() {
  const { village, dispatch } = useApp();

  function handleOpenInventory(personId, villageId) {
    dispatch(openInventory({ isPlayer: false, personId, villageId }));
  }

  return (
    <div className={styles.villageContainer}>
      {village.map((villItem) => (
        <div
          key={villItem.id}
          className={styles.villageBox + " " + styles.villageB}
        >
          <h2>🏔️ {villItem.name}</h2>
          <p>Level: {villItem.level}</p>
          {villItem.peoples.map((person) => (
            <div className={styles.people}>
              <Button
                onClick={() => handleOpenInventory(person.id, villItem.id)}
              >
                🧙 {person.name}
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
