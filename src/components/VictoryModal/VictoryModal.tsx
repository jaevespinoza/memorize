import { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../config/store";
import { resetGame } from "../../actions/GameReducer";
import { useTranslation } from "react-i18next";

interface IVictoryModal {
  numberToSuccess: number;
}

/**
 * Dialog/Modal that will be shown when the user has won the game.
 * It allows for restarting it as well.
 * @param numberToSuccess Number of cards needed to win the game
 */
const VictoryModal = ({ numberToSuccess }: IVictoryModal) => {
  const [show, setShow] = useState(false);
  const name = useSelector((state: RootState) => state.game.name);

  const dispatch = useDispatch();
  const successCount = useSelector((state: RootState) => state.game.success);

  const { t } = useTranslation("game");
  /**
   * Hook that is called only when the number of successes/matches equals
   * the number of unique cards there are.
   */
  useEffect(() => {
    if (successCount === numberToSuccess) setShow(true);
  }, [successCount]);

  /**
   * Function that allows to restart the game after it's finished
   */
  const onRestart = () => {
    dispatch(resetGame());
    setShow(false);
  };

  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog ">
          <div className="modal-content victory-modal__content">
            <div className="modal-header">
              <h5 className="modal-title">{t("victory.title", { name })}</h5>
            </div>
            <div className="modal-body victory-modal__body">
              <p>{t("victory.description")}</p>
            </div>
            <div className="modal-footer victory-modal__footer">
              <button
                onClick={onRestart}
                type="button"
                className="btn btn-primary victory-modal__footer__button"
              >
                {t("victory.restart")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
      />
    </>
  );
};

export default VictoryModal;
