import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import GameReducer, { IGameState } from "../../../actions/GameReducer";
import GameCard from "../GameCard";
import { Provider } from "react-redux";

const testCard = {
  id: 1,
  content_type: "image/jpeg",
  title: "Title",
  url: "",
  uuid: "",
};

describe("Game Card", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("renders properly", () => {
    const body = render(
      <Provider store={store}>
        <GameCard {...testCard} revealed={false} />
      </Provider>
    );

    expect(body).toMatchSnapshot();
  });

  test("shows the unrevealed card", () => {
    render(
      <Provider store={store}>
        <GameCard {...testCard} revealed={false} />
      </Provider>
    );
    expect(screen.getByTestId("unrevealed-card")).not.toBeNull();
  });

  test("shows the image", () => {
    render(
      <Provider store={store}>
        <GameCard {...testCard} revealed={true} />
      </Provider>
    );

    expect(screen.queryByTestId("unrevealed-card")).toBeNull();
    expect(screen.getByTestId("revealed-image")).not.toBeNull();
  });
});
