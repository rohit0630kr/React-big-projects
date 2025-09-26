import { startCrafting, useApp } from "../../components/AppActions";
import styles from "./ConstructionModal.module.css";

import { closeCrafting } from "../../components/AppActions";
import { useState } from "react";

export default function ConstructionModal() {
  const { totalObjects, player, dispatch } = useApp();
  const [selectedCard, setSelectedCard] = useState([]);

  const inventory = player.inventory;

  function handleCloseCrafting() {
    dispatch(closeCrafting());
  }

  const handleSelecting = (id) => {
    setSelectedCard((prevSelected) => {
      if (prevSelected.includes(id)) {
        // If already selected, deselect it
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else if (prevSelected.length < 2) {
        // If less than 2 selected, add the new id
        return [...prevSelected, id];
      } else {
        // If 2 already selected, ignore the new selection
        return prevSelected;
      }
    });
  };

  function handleCrafting() {
    dispatch(startCrafting(selectedCard));
  }
  const craftedObj = player.craftTable;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>
            {craftedObj
              ? `Successfully crafted ${craftedObj.name}, item sent to your inventory`
              : "🏗️ Construction Workshop"}
          </h2>
          <button className={styles.closeBtn} onClick={handleCloseCrafting}>
            ✖
          </button>
        </div>
        {!craftedObj && (
          <>
            <div className={styles.instructions}>
              <p>Select any two items to combine and craft something new.</p>
            </div>

            <div className={styles.inventorySection}>
              {inventory.length === 0 ? (
                <p className={styles.empty}>No items to craft with.</p>
              ) : (
                <ul className={styles.itemList}>
                  {inventory.map((item) => (
                    <li
                      key={item.id}
                      className={`${styles.item} ${
                        selectedCard.find((el) => el === item.id)
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => handleSelecting(item.id)}
                    >
                      <span className={styles.icon}>{item.icon}</span>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.qty}>x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {selectedCard[0] && selectedCard[1] && (
              <div className={styles.mergeBox}>
                <p>
                  ⚒️ Merging{" "}
                  <strong>
                    {totalObjects.find((el) => el.id === selectedCard[0]).name}
                  </strong>{" "}
                  +{" "}
                  <strong>
                    {totalObjects.find((el) => el.id === selectedCard[1]).name}
                  </strong>
                </p>
                <button className={styles.mergeBtn} onClick={handleCrafting}>
                  Merge Items
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
