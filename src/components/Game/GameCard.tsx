import { IDuplicatedImage } from "../../interfaces/AppActionsInterface";
import "./styles.scss";
import { setSelectedCards } from "../../actions/GameReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../config/store";

interface IGameCard extends IDuplicatedImage {
  revealed: boolean;
}

/**
 * Card that will host the images for the many animals obtained by the API
 * @param url Image url
 * @param uuid Unique id of the image
 * @param title Name associated with the image
 * @param content_type Content type of the image
 */
const GameCard = ({ url, title, content_type, revealed, id }: IGameCard) => {
  const dispatch = useDispatch();
  const matchPopup = useSelector((state: RootState) => state.game.matchPopup);

  const enterKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      dispatch(setSelectedCards({ id, name: title }));
      event.preventDefault();
    }
  };

  return (
    <div
      className="card card-content"
      tabIndex={id + 1}
      data-testid="card-content"
      onKeyDown={enterKeyHandler}
      onClick={() => {
        if (!matchPopup && !revealed)
          dispatch(setSelectedCards({ id, name: title }));
      }}
    >
      {!revealed ? (
        <div
          className="card-content--unrevealed card-content__image"
          data-testid="unrevealed-card"
        >
          <h1 className="card-content--unrevealed__text">?</h1>
        </div>
      ) : (
        <>
          <img
            src={url}
            className="card-img-top card-content__image"
            data-testid="revealed-image"
            content={content_type}
            alt={title}
          />
          <div className="card-body card-content__body">
            <h6 className="card-title card-content__body__title">{title}</h6>
          </div>
        </>
      )}
    </div>
  );
};

export default GameCard;
