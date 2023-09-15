import { AnyAction, Reducer, combineReducers } from "redux";
import { IAppState } from "../src/reducer/AppActionsInterface";
import AppReducer from "../src/reducer/AppReducer";

/**
 * Interface that composes the entire application.
 * All other state interfaces should go here (if there needs to be more)
 */
export interface IState {
  /**
   * @param application The application's state
   */
  readonly application: IAppState;
}

/**
 * The application's main reducer. Everything will pass through
 * this reducer and it will be handled by the different reducers depending
 * on the actions the users fire.
 */
const RootReducer: Reducer<IState, AnyAction> = combineReducers({
  application: AppReducer,
});

export default RootReducer;
