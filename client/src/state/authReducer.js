import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isLogged: false,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
