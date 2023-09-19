import { test, describe, beforeEach, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import GameReducer, {
  setSelectedCards,
  setFoundCards,
  setMatchedCard,
  resetCards,
  resetGame,
  setMatchedPopup,
  setSuccess,
  setErrors,
  setName,
  IGameState,
} from "../GameReducer";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

describe("Game Reducer actions", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("Should change state upon selected card", () => {
    store.dispatch(setSelectedCards({ id: 1, name: "card 1" }));
    expect(store.getState().game.selectedCards.length).toBe(1);
  });

  test("Should change success count", () => {
    store.dispatch(setSuccess(1));
    expect(store.getState().game.success).toBe(1);
  });

  test("Should change error count", () => {
    store.dispatch(setErrors(1));
    expect(store.getState().game.errors).toBe(1);
  });

  test("Should change name", () => {
    store.dispatch(setName("Javier Espinoza"));
    expect(store.getState().game.name).toBe("Javier Espinoza");
  });

  test("Should reset game", () => {
    store.dispatch(setFoundCards({ id: 1, name: "Card 1" }));
    store.dispatch(setFoundCards({ id: 2, name: "Card 1" }));
    store.dispatch(setSuccess(1));
    store.dispatch(setErrors(1));
    store.dispatch(resetGame());
    expect(store.getState().game.success).toBe(0);
    expect(store.getState().game.foundCards.length).toBe(0);
    expect(store.getState().game.errors).toBe(0);
    expect(store.getState().game.successfulGames).toBe(1);
  });

  test("Should reset cards", () => {
    store.dispatch(setSelectedCards({ id: 1, name: "Card 1 " }));
    store.dispatch(resetCards());
    expect(store.getState().game.selectedCards.length).toBe(0);
  });

  test("Should change match cards", () => {
    store.dispatch(setMatchedCard(true));
    expect(store.getState().game.matchedCard).toBe(true);
  });

  test("Should change popup match", () => {
    store.dispatch(setMatchedPopup(true));
    expect(store.getState().game.matchPopup).toBe(true);
  });

  test("Shoud match the same cards", () => {
    store.dispatch(setSelectedCards({ id: 1, name: "Card 1" }));
    store.dispatch(setSelectedCards({ id: 2, name: "Card 1" }));
    expect(store.getState().game.success).toBe(1);
    expect(store.getState().game.foundCards.length).toBe(2);
  });

  test("Should add error for mismatch", () => {
    store.dispatch(setSelectedCards({ id: 1, name: "Card 1" }));
    store.dispatch(setSelectedCards({ id: 2, name: "Card 2" }));
    expect(store.getState().game.errors).toBe(1);
    expect(store.getState().game.foundCards.length).toBe(0);
  });
});
