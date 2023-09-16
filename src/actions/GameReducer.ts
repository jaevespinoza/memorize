// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { ISelectedImage } from "../interfaces/AppActionsInterface";

interface IGameState {
  selectedCards: ISelectedImage[];
  foundCards: ISelectedImage[];
  success: number;
  errors: number;
  name: string;
}

const gameSlice = createSlice({
  name: "gameApplication",
  initialState: {
    selectedCards: [] as ISelectedImage[],
    foundCards: [] as ISelectedImage[],
    success: 0,
    errors: 0,
    name: "",
  } as IGameState,
  reducers: {
    setSelectedCards: (state, action) => {
      if (!state.selectedCards.some((item) => item.id === action.payload.id)) {
        state.selectedCards.push(action.payload);
        checkSelected(state);
      }
    },
    setFoundCards: (state, action) => {
      state.foundCards.push(action.payload);
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

const checkSelected = (state: IGameState) => {
  if (state.selectedCards.length < 2) {
    return;
  }
  const checkSelectedCards =
    state.selectedCards[0].name === state.selectedCards[1].name;
  if (checkSelectedCards) {
    console.log("hey!");
    state.foundCards.push(state.selectedCards[0]);
    state.foundCards.push(state.selectedCards[1]);
    state.selectedCards = [];
    state.success += 1;
  } else {
    state.selectedCards = [];
    state.errors += 1;
  }
};

export const {
  setSelectedCards,
  setFoundCards,
  setSuccess,
  setErrors,
  setName,
} = gameSlice.actions;
export default gameSlice.reducer;
