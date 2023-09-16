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
  images?: IImageData;
}

/**
 * Interface that represents the app's state for Redux
 */
export interface IAppState {
  name: string;
  errors: number;
  successes: number;
  images: IImageData;
}

/**
 * Interface that shows the data obtained by the API
 */
export interface IImageData {
  readonly entries: IImageField[];
}

/**
 * Interface that shows fields the API response has
 */
export interface IImageField {
  fields: {
    image: IImage;
  };
}

/**
 * Interface that shows the necesary data for the game
 */
export interface IImage {
  /**
   * Type of content associated with the image (typically jpeg)
   */
  content_type: string;
  /**
   * Title of the image
   */
  title: string;
  /**
   * Url/source of the image
   */
  url: string;
  /**
   * Unique id for the image
   */
  uuid: string;
}
