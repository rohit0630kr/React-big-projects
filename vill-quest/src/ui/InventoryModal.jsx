import { closeInventory, useApp } from "../components/AppActions";
import styles from "./InventoryModal.module.css";

export default function InventoryModal() {
  const { openedInventory, dispatch } = useApp();

  console.log(openedInventory);

  function handleCloseInventory() {
    dispatch(closeInventory());
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {openedInventory?.secondary && (
            <h2>
              {openedInventory.villagerDetails.isGod
                ? "Take from "
                : `Trade with `}
              {openedInventory.villagerDetails.name}
            </h2>
          )}
          <button className={styles.closeBtn} onClick={handleCloseInventory}>
            ✖
          </button>
        </div>

        <div className={styles.tradeSection}>
          {/* Villager Inventory */}
          {openedInventory.secondary && (
            <div className={styles.inventoryColumn}>
              <h3>
                🏘️ {openedInventory.villagerDetails.name}'s
                {openedInventory.villagerDetails.isGod
                  ? " mercy"
                  : " inventory"}
              </h3>
              {openedInventory.secondary?.length === 0 ? (
                <p className={styles.emptyText}>Nothing to take.</p>
              ) : (
                <ul className={styles.itemList}>
                  {openedInventory.secondary?.map((item) => (
                    <li key={item.id} className={styles.item}>
                      <span className={styles.itemName}>
                        {item.icon} {item.name}
                      </span>
                      <span className={styles.itemQty}>x {item.quantity}</span>
                      <button className={styles.actionBtn}>Take</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Player Inventory */}
          <div className={styles.inventoryColumn}>
            <h3>🧑 Your Inventory</h3>
            {openedInventory.length === 0 ? (
              <p className={styles.emptyText}>You have nothing to give.</p>
            ) : (
              <ul className={styles.itemList}>
                {openedInventory.primary.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <span className={styles.itemName}>
                      {item.icon} {item.name}
                    </span>
                    <span className={styles.itemQty}>x {item.quantity}</span>
                    {!openedInventory.villagerDetails.isGod && (
                      <button
                        // onClick={() => onGive(item)}
                        className={styles.actionBtn}
                      >
                        Give
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
