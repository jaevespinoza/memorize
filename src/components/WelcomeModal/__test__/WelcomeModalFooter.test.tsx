import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { beforeEach, describe, test, expect } from "vitest";
import { I18nextProvider } from "react-i18next";
import GameReducer, { IGameState } from "../../../actions/GameReducer";
import { Provider } from "react-redux";
import i18n from "../../../i18n/i18n";
import WelcomeModalFooter from "../WelcomeModalFooter";
import { render, screen } from "@testing-library/react";

describe("Modal Footer", () => {
  let store: ToolkitStore<{ game: IGameState }>;

  beforeEach(() => {
    store = configureStore({ reducer: { game: GameReducer } });
  });

  test("renders i18n", () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModalFooter enabledButton={false} onSaveName={() => {}} />
        </I18nextProvider>
      </Provider>
    );

    expect(screen.getByTestId("save-button").textContent).toBe("Save name");
  });

  test("keeps button disabled", () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModalFooter enabledButton={false} onSaveName={() => {}} />
        </I18nextProvider>
      </Provider>
    );

    expect(
      screen.getByTestId("save-button").attributes.getNamedItem("disabled")
    ).not.toBeNull();
  });

  test("keeps button enabled", () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WelcomeModalFooter enabledButton={true} onSaveName={() => {}} />
        </I18nextProvider>
      </Provider>
    );

    expect(
      screen.getByTestId("save-button").attributes.getNamedItem("disabled")
    ).toBeNull();
  });
});
