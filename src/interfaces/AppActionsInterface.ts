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

/**
 * Interface that will allow us to append an id to the image
 * to make them distinct from each other
 */
export interface IDuplicatedImage extends IImage {
  id: number;
}

/**
 * Interface that allows us to save both the different ids and
 * similar uuids
 */
export interface ISelectedImage {
  id: number;
  name: string;
}
