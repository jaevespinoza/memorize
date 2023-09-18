// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { ISelectedImage } from "../interfaces/AppActionsInterface";

export interface IGameState {
  selectedCards: ISelectedImage[];
  foundCards: ISelectedImage[];
  matchPopup: boolean;
  matchedCard: boolean;
  successfulGames: number;
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
    matchPopup: false,
    matchedCard: false,
    errors: 0,
    name: "",
    successfulGames: 0,
  } as IGameState,
  reducers: {
    /**
     * Sets whether the cards match or not
     */
    setMatchedCard: (state, action) => {
      state.matchedCard = action.payload;
    },
    /**
     * Sets whether the match alert should be shown or not
     */
    setMatchedPopup: (state, action) => {
      state.matchPopup = action.payload;
    },
    /**
     * Sets the selected cards into the state and then checks
     * whether they match or not
     */
    setSelectedCards: (state, action) => {
      if (!state.selectedCards.some((item) => item.id === action.payload.id)) {
        state.selectedCards.push(action.payload);
        checkSelected(state);
      }
    },
    /**
     * Sets the found cards into the state so they are still shown
     */
    setFoundCards: (state, action) => {
      state.foundCards.push(action.payload);
    },
    /**
     * Sets the number of successful matches
     */
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    /**
     * Sets the number of wrong matches
     */
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    /**
     * Sets the name of the user into the state
     */
    setName: (state, action) => {
      state.name = action.payload;
    },
    /**
     * Resets the selected cards and then adds to the error
     */
    resetCards: (state) => {
      state.selectedCards = [];
    },
    resetGame: (state) => {
      state.foundCards = [];
      state.selectedCards = [];
      state.success = 0;
      state.errors = 0;
      state.successfulGames += 1;
    },
  },
});

/**
 * Checks the cards that were selected.
 * If the cards match, they are added to the pool of found cards and
 * the success popup shows. If not, they are discarded and the
 * error popup shows.
 * @param state The Application state
 * @returns The updated state with the amount of errors and successes updated
 */
const checkSelected = (state: IGameState) => {
  // If the user hasn't selected more than two cards, we return
  if (state.selectedCards.length < 2) {
    return;
  }
  // We compare the names of the cards
  const checkSelectedCards =
    state.selectedCards[0].name === state.selectedCards[1].name;
  state.matchPopup = true;
  // If they match, we set the matchedCard variable to true. If not, it's false.
  if (checkSelectedCards) {
    state.matchedCard = true;
    successOnMatch(state);
  } else {
    state.matchedCard = false;
    state.errors += 1;
  }
};

const successOnMatch = (state: IGameState) => {
  state.foundCards.push(state.selectedCards[0]);
  state.foundCards.push(state.selectedCards[1]);
  state.selectedCards = [];
  state.success += 1;
};

export const {
  setSelectedCards,
  setFoundCards,
  setMatchedCard,
  resetCards,
  resetGame,
  setMatchedPopup,
  setSuccess,
  setErrors,
  setName,
} = gameSlice.actions;
export default gameSlice.reducer;
