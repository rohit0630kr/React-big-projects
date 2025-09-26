import InventoryModal from "./InventoryModal";
// import ConstructionModal from "./features/player/ConstructionModal";
import { useApp } from "../components/AppActions";
import ConstructionModal from "../features/player/ConstructionModal";

export default function Modal() {
  const { isCrafting, openedInventory } = useApp();
  return (
    <>
      {openedInventory && <InventoryModal />}
      {isCrafting && <ConstructionModal />}
    </>
  );
}
