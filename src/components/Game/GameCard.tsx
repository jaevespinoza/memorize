import { IImage } from "../../reducer/AppActionsInterface";
import "./styles.scss";

/**
 * Card that will host the images for the many animals obtained by the API
 * @param url Image url
 * @param uuid Unique id of the image
 * @param title Name associated with the image
 * @param content_type Content type of the image
 */
const GameCard = ({ url, uuid, title, content_type }: IImage) => {
  return (
    <div className="col-md-2 col-sm-5 col-xs-5 m-2">
      <div className="card card_content">
        <img
          src={url}
          className="card-img-top card_content__image"
          content={content_type}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
