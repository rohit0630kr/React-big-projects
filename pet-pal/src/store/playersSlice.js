import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gamePlay: {
    isPlaying: false,
    player: {},
  },
  // here users arrays is gonna be quite complex and deeply nested modifaction, so redux toolkit is the best choice here.
  players: [
    {
      pokemons: [],
      id: 1,
      name: "Ash Ketchum",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/c/cd/Ash_JN.png/800px-Ash_JN.png",
      region: "Kanto",
    },
    {
      pokemons: [],
      id: 2,
      name: "Misty",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/9/99/Misty_Journeys.png/225px-Misty_Journeys.png",
      region: "Cerulean City",
    },
    {
      pokemons: [],
      id: 3,
      name: "Professor Oak",
      image:
        "https://archives.bulbagarden.net/media/upload/7/7d/Professor_Oak_JN_artwork.png",
      region: "Pewter City",
    },
    {
      pokemons: [],
      id: 4,
      name: "Team Rocket - James",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/1/19/James_JN.png/239px-James_JN.png",
      region: "Unknown",
    },
    {
      pokemons: [],
      id: 5,
      name: "Officer Jenny",
      image:
        "https://archives.bulbagarden.net/media/upload/b/bb/Officer_Jenny_JN.png",
      region: "Multiple",
    },
  ],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    loginPlayer(state, action) {
      state.gamePlay.isPlaying = true;
      state.gamePlay.player = state.players.find(
        (el) => el.id === action.payload
      );
    },
    addPokemon(state, action) {
      state.gamePlay.player.pokemons.push(action.payload);
    },
    removePokemon(state, action) {
      state.gamePlay.player.pokemons = state.gamePlay.player.pokemons.filter(
        (poke) => poke.id !== action.payload
      );
    },
    loadGame(state, action) {
      state.gamePlay.isPlaying = true;
      state.gamePlay = action.payload;
    },
    loadNewGame(state, action) {
      state.players = action.payload;
    },
  },
});

export function loadGame() {
  return function (dispatch) {
    const savedData = JSON.parse(localStorage.getItem("petpal"));
    console.log(savedData);
    dispatch({ type: "players/loadGame", payload: savedData });
  };
}

console.log(playersSlice);
const playersReducer = playersSlice.reducer;

export const { addPokemon, loginPlayer, removePokemon, loadNewGame } =
  playersSlice.actions;

export default playersReducer;
