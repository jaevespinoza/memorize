import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../config/store";
import { resetCards, setMatchedPopup } from "../../actions/GameReducer";

const AlertComponent = () => {
  const matchSuccess = useSelector(
    (state: RootState) => state.game.matchedCard
  );

  const dispatch = useDispatch();

  const matchPopup = useSelector((state: RootState) => state.game.matchPopup);

  useEffect(() => {
    // Show the alert when the "show" prop is true

    if (matchPopup) {
      // Automatically hide the alert after 2 seconds
      const timer = setTimeout(() => {
        dispatch(setMatchedPopup(false));
        dispatch(resetCards());
      }, 2000);

      // Clean up the timer when the component unmounts or "show" prop changes
      return () => clearTimeout(timer);
    }
  }, [matchPopup]);

  const handleClose = () => {
    dispatch(setMatchedPopup(false));
  };

  return (
    matchPopup && (
      <div
        className={`alert ${
          matchSuccess ? "alert-success" : "alert-danger"
        } alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x`}
        role="alert"
      >
        <div className="container notification__content">
          {matchSuccess ? (
            <>
              <i className="bi bi-check-circle"></i>{" "}
              <b className="notification__content__text">Success!</b>
            </>
          ) : (
            <>
              <i className="bi bi-exclamation-triangle"></i>
              <b className="notification__content__text"> Error!</b>
            </>
          )}
          <button
            type="button"
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
