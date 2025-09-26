import { createContext, useMemo, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  totalObjects: [
    { name: "🪵 wood", id: 1, level: 1 },
    { name: "🧵 string", id: 2, level: 1 },
    { name: "🥚 egg", id: 3, level: 1 },
    { name: "🪵 stick", id: 4, level: 1 },

    { name: "⚔️ Arrow", id: 14, level: 2 },
    { name: "🏹 bow", id: 5, level: 2 },
    { name: "⚔️ iron-sword", id: 6, level: 2 },
    { name: "🔨 plough", id: 7, level: 2 },
    { name: "🥖 bread", id: 8, level: 2 },
    { name: "🪨 cobblestone", id: 9, level: 2 },

    { name: "💎 diamond", id: 10, level: 3 },
    { name: "💠 diamond-sword", id: 11, level: 3 },
    { name: "🪄 magic-staff", id: 12, level: 3 },
    { name: "⬛ coal", id: 13, level: 3 },
  ],

  constructionLogic: [
    { itemPrimary: 1, itemSecondary: 1, result: 4 },
    { itemPrimary: 4, itemSecondary: 2, result: 5 },
    { itemPrimary: 4, itemSecondary: 6, result: 7 },
    { itemPrimary: 1, itemSecondary: 9, result: 6 },
    { itemPrimary: 4, itemSecondary: 13, result: 12 },
    { itemPrimary: 1, itemSecondary: 10, result: 11 },
  ],

  openedInventory: null,

  isCrafting: false,
  player: {
    name: "rohit",
    level: 3,
    inventory: [
      { name: "🪵 wood", id: 1, level: 1 },
      { name: "🧵 string", id: 2, level: 1 },
      { name: "🥚 egg", id: 3, level: 1 },
      { name: "🪵 stick", id: 4, level: 1 },
    ],
    exp: "",
  },
  village: [
    {
      name: "vrindavan",
      id: 3,
      level: 10,
      exp: "",
      peoples: [
        {
          name: "krishna",
          id: 10,
          level: "infinite",
          inventory: [
            { name: "💎 diamond", id: 10, level: 3 },
            { name: "🪄 magic-staff", id: 12, level: 3 },
          ],
        },
      ],
    },
    {
      name: "patna",
      id: 4,
      level: 2,
      exp: "",
      peoples: [
        {
          name: "abhijit",
          id: 3,
          level: 2,
          inventory: [
            { name: "🔨 plough", id: 7, level: 2 },
            { name: "🥖 bread", id: 8, level: 2 },
          ],
        },
      ],
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "openInventory": {
      const person = state.village
        .find((vill) => vill.id === action.payload.villageId)
        ?.peoples?.find((person) => person.id === action.payload.personId);

      const inventory = {
        primary: action.payload && state.player.inventory,
        secondary: !action.payload.isPlayer && person.inventory,
        villagerDetails: {
          id: person?.id,
          isGod: person?.level === "infinite",
          name: person?.name,
        },
      };

      return {
        ...state,
        openedInventory: inventory,
      };
    }
    case "closeInventory":
      return { ...state, openedInventory: null };
    case "openCrafting": {
      console.log("crafting...");

      return { ...state, isCrafting: true };
    }
    case "startCrafting": {
      const craftItemPrimary = action.payload[0];
      const craftItemSecondary = action.payload[1];
      const resultId = state.constructionLogic.find(
        (el) =>
          el.itemPrimary === craftItemPrimary &&
          el.itemSecondary === craftItemSecondary
      )?.result;
      const result = state.totalObjects.find((el) => el.id === resultId);
      if (!result) return state;
      return {
        ...state,
        player: {
          ...state.player,
          craftTable: result,
          inventory: [...state.player.inventory, result],
        },
      };
    }
    case "closeCrafting":
      console.log("close-crafting");
      return {
        ...state,
        player: { ...state.player, craftTable: null },
        isCrafting: false,
      };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    function () {
      return {
        player: state.player,
        village: state.village,
        dispatch,
        openedInventory: state.openedInventory,
        isCrafting: state.isCrafting,
        totalObjects: state.totalObjects,
      };
    },
    [
      state.player,
      state.village,
      state.openedInventory,
      state.craft,
      state.isCrafting,
      state.craftTable,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };

export default AppProvider;
