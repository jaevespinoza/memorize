import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { beforeEach, describe, expect, test } from "vitest";
import GameReducer, { IGameState } from "../../../actions/GameReducer";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";
import WelcomeModal from "../WelcomeModal";
import userEvent from "@testing-library/user-event";

describe("Welcome Modal", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("matches snapshot", () => {
    const body = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModal />
        </I18nextProvider>
      </Provider>
    );

    expect(body).toMatchSnapshot();
  });

  test("empty input", () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModal />
        </I18nextProvider>
      </Provider>
    );

    expect(screen.getByRole("form")).toHaveFormValues({
      fullName: "",
    });
  });

  test("changes the input", () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModal />
        </I18nextProvider>
      </Provider>
    );

    userEvent
      .type(screen.getByTestId("name-input"), "Javier")
      .then(() =>
        expect(screen.getByTestId("name-input")).toHaveValue("Javier")
      );
  });
});
