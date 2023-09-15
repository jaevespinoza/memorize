import { AnyAction } from "redux";

/**
 * Interface that will allow us to safely retrieve elements
 * when the actions are intercepted by the redux reducer
 */
export interface IAppActions extends AnyAction {
  /**
   * Name of the user that enters the page
   */
  name?: string;
  /**
   * @param error Number of errors that the user commits
   */
  error?: number;
  /**
   * @param error Number of successes that the user commits
   */
  success?: number;
  /**
   * @param images Images retrieved by the Modyo API
   */
  images?: any[];
}

/**
 * Interface that represents the app's state for Redux
 */
export interface IAppState {
  name: string;
  errors: number;
  successes: number;
  images: any[];
}
