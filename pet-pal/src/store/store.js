import { configureStore } from "@reduxjs/toolkit";

import playersReducer from "./playersSlice";

const store = configureStore({
  reducer: {
    game: playersReducer,
  },
});

export default store;
