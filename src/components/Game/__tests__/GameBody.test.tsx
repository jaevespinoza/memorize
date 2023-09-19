import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { beforeEach, describe, expect, test } from "vitest";
import GameReducer, { IGameState } from "../../../actions/GameReducer";
import GameBody from "../GameBody";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Game Body", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("renders properly", () => {
    const body = render(
      <Provider store={store}>
        <GameBody data={[]} />
      </Provider>
    );

    expect(body).toMatchSnapshot();
  });

  test("renders one card", () => {
    render(
      <Provider store={store}>
        <GameBody
          data={[
            {
              id: 1,
              content_type: "image/jpeg",
              title: "Title",
              url: "",
              uuid: "",
            },
          ]}
        />
      </Provider>
    );

    expect(screen.queryAllByTestId("game-container-card").length).toBe(1);
  });
});
