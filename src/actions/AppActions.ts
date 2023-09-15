import { IAppActions } from "../reducer/AppActionsInterface";
import { createAction } from "@reduxjs/toolkit";
import AppTypeActions from "./AppTypeActions";

/**
 * Action that confirms the user's name upon confirming it on the
 * dialog modal.
 * @param name Full name of the user
 */
export const AppUserNameAction = createAction<string>(AppTypeActions.UserName);

/**
 * Action that sets the number of successes the user has done
 * on the app
 * @param success Amount of successes
 */
export const AppSuccessCountAction = createAction<number>(
  AppTypeActions.Count.Success
);

/**
 * Action that sets the number of errors the user has done
 * on the app
 * @param error Amount of errors
 */
export const AppErrorCountAction = createAction<number>(
  AppTypeActions.Count.Error
);

/**
 * Action that saves the images obtained by the Modyo API
 * @param images Array of images to be obtained
 */
export const AppImagesAction = createAction<any[]>(AppTypeActions.Images);

export const getImagesFromAPI = () => () => {};
