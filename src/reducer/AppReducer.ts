import {
  AppErrorCountAction,
  AppImagesAction,
  AppSuccessCountAction,
  AppUserNameAction,
} from "../actions/AppActions";
import { IAppState } from "./AppActionsInterface";
import { createReducer } from "@reduxjs/toolkit";

/**
 * The initial state of the application
 */
const initialState: IAppState = {
  errors: 0,
  successes: 0,
  images: [],
  name: "",
};

/**
 * Function that saves the new error count inside the state
 * @param state Previous state before the change
 * @param errors New error count to be added on the state
 * @returns Updated state with updated error count
 */
const setNumberOfErrors = (state: IAppState, errors: number): IAppState => ({
  ...state,
  errors,
});

/**
 * Function that saves the new success count inside the state
 * @param state Previous state before the change
 * @param successes New success count to be added on the state
 * @returns Updated state with updated success count
 */
const setNumberOfSuccesses = (
  state: IAppState,
  successes: number
): IAppState => ({
  ...state,
  successes,
});

/**
 * Function that saves the images obtained by the API
 * @param state Previous state before the change
 * @param images New images to be saved
 * @returns Updated state with saved images
 */
const setImages = (state: IAppState, images: any[]): IAppState => ({
  ...state,
  images,
});

/**
 * Function that saves the user's name in the state
 * @param state Previous state before the change
 * @param name Name to be added to the state
 * @returns Updated state with the new name
 */
const setUserName = (state: IAppState, name: string): IAppState => ({
  ...state,
  name,
});

/**
 * Application's reducer to handle the storage of information
 * that can be used through the app
 * @param state Current app's state
 * @param action Action fired by the user's interactions with the UI
 * @returns Updated state
 */
const AppReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AppImagesAction, (state: IAppState, action) => {
      state.images = action.payload;
    })
    .addCase(AppErrorCountAction, (state: IAppState, action) => {
      state.errors = action.payload;
    })
    .addCase(AppSuccessCountAction, (state: IAppState, action) => {
      state.successes = action.payload;
    })
    .addCase(AppUserNameAction, (state: IAppState, action) => {
      state.name = action.payload;
    });
});

export default AppReducer;
