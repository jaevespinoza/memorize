import { act, render, screen } from "@testing-library/react";

import AlertComponent from "../AlertComponent";
import { beforeEach, describe, expect, test } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import GameReducer, {
  IGameState,
  setMatchedCard,
  setMatchedPopup,
} from "../../../actions/GameReducer";
import { Provider } from "react-redux";

describe("Alert Component", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("renders properly", () => {
    const alert = render(
      <Provider store={store}>
        <AlertComponent />
      </Provider>
    );

    expect(alert).toMatchSnapshot();
  });

  test("has Error message", () => {
    store.dispatch(setMatchedPopup(true));

    render(
      <Provider store={store}>
        <AlertComponent />
      </Provider>
    );

    expect(screen.getByTestId("message").textContent).toBe("Error!");
  });

  test("has Success message", () => {
    store.dispatch(setMatchedPopup(true));
    store.dispatch(setMatchedCard(true));

    render(
      <Provider store={store}>
        <AlertComponent />
      </Provider>
    );

    expect(screen.getByTestId("message").textContent).toBe("Success!");
  });

  test("closes Message", () => {
    store.dispatch(setMatchedPopup(true));
    store.dispatch(setMatchedCard(true));

    render(
      <Provider store={store}>
        <AlertComponent />
      </Provider>
    );

    act(() => {
      screen.getByTestId("close-button").click();
    });

    expect(store.getState().game.matchPopup).toBe(false);
    expect(screen.queryByTestId("popup-message")).toBe(null);
  });
});
