import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../config/store";
import { resetCards, setMatchedPopup } from "../../actions/GameReducer";

/**
 * Alert that shows whenever the user matches or fails to match the cards
 * in the game.
 */
const AlertComponent = () => {
  const matchSuccess = useSelector(
    (state: RootState) => state.game.matchedCard
  );

  const dispatch = useDispatch();

  const matchPopup = useSelector((state: RootState) => state.game.matchPopup);

  useEffect(() => {
    // Show the alert when the "show" prop is true

    if (matchPopup) {
      // Automatically hide the alert after 1 seconds
      const timer = setTimeout(() => {
        dispatch(setMatchedPopup(false));
        dispatch(resetCards());
      }, 1000);

      // Clean up the timer when the component unmounts or "show" prop changes
      return () => clearTimeout(timer);
    }
  }, [matchPopup]);

  /**
   * Function executed when clicking the closed button
   */
  const handleClose = () => {
    dispatch(setMatchedPopup(false));
    dispatch(resetCards());
  };

  return (
    matchPopup && (
      <div
        data-testid="popup-message"
        className={`alert ${
          matchSuccess ? "alert-success" : "alert-danger"
        } alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x`}
        role="alert"
      >
        <div className="container notification__content">
          <i
            className={`bi ${
              matchSuccess ? "bi-check-circle" : "bi-exclamation-triangle"
            }`}
          ></i>{" "}
          <b className="notification__content__text" data-testid="message">
            {matchSuccess ? "Success!" : "Error!"}
          </b>
          <button
            type="button"
            data-testid="close-button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          />
        </div>
      </div>
    )
  );
};

export default AlertComponent;
