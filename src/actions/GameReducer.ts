// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameApplication",
  initialState: {
    cards: [],
    success: 0,
    errors: 0,
    name: "",
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setCards, setSuccess, setErrors, setName } = gameSlice.actions;
export default gameSlice.reducer;
