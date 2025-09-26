import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {},
  },
});

export const { createUser } = usersSlice.actions;

export default usersSlice.reducer;
