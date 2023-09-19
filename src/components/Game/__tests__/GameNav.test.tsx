import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { beforeEach, describe, expect, test } from "vitest";
import GameReducer, {
  IGameState,
  setErrors,
  setSuccess,
} from "../../../actions/GameReducer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GameNav from "../GameNav";

describe("Game Nav", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("Renders properly", () => {
    const nav = render(
      <Provider store={store}>
        <GameNav />
      </Provider>
    );

    expect(nav).toMatchSnapshot();
  });

  test("Shows amount of success", () => {
    store.dispatch(setSuccess(2));
    render(
      <Provider store={store}>
        <GameNav />
      </Provider>
    );

    expect(screen.getByTestId("success-count").textContent).toBe("Success: 2");
  });

  test("Shows amount of errors", () => {
    store.dispatch(setErrors(2));
    render(
      <Provider store={store}>
        <GameNav />
      </Provider>
    );

    expect(screen.getByTestId("error-count").textContent).toBe("Errors: 2");
  });

  test("Shows title of page", () => {
    render(
      <Provider store={store}>
        <GameNav />
      </Provider>
    );

    expect(screen.getByTestId("header-title").textContent).toBe("Memorize!");
  });
});
