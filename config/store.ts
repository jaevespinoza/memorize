import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "../src/actions/GameReducer";
import GameApi, { imagesApi } from "../src/actions/GameApi";

/**
 * Main Store that will be used to dispatch and handle the application's state
 */
export const store = configureStore({
  reducer: {
    game: GameReducer,
    [imagesApi.reducerPath]: GameApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
