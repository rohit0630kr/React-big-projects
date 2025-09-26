import { useContext } from "react";
import { AppContext } from "./AppProvider";

function openInventory(data) {
  return { type: "openInventory", payload: data };
}

function construct(data) {
  return { type: "construct", payload: data };
}

function closeInventory() {
  return { type: "closeInventory" };
}

function openCrafting() {
  return { type: "openCrafting" };
}

function closeCrafting() {
  return { type: "closeCrafting" };
}

function startCrafting(data) {
  return { type: "startCrafting", payload: data };
}

function useApp() {
  const data = useContext(AppContext);
  return data;
}

export {
  openInventory,
  construct,
  closeInventory,
  openCrafting,
  closeCrafting,
  startCrafting,
  useApp,
};
