import { useSelector } from "react-redux";
import "./styles.scss";
import { RootState } from "../../../config/store";
import { useTranslation } from "react-i18next";

/**
 * Nav of the site that shows the name of the game, and the
 * counter for both the successes and the errors.
 * It uses selectors to access the state and show the values.
 */
const GameNav = () => {
  const { t } = useTranslation("game");
  const successCount = useSelector((state: RootState) => state.game.success);
  const errorCount = useSelector((state: RootState) => state.game.errors);
  return (
    <nav className="navbar navbar-dark bg-primary game-container__header fixed-top">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <h3
            className="game-container__header__title mb-0"
            data-testid="header-title"
          >
            {t("nav.title")}
          </h3>
        </div>
        <div className="game-container__header__counters text-white">
          <span
            className="badge badge-pill badge-success"
            data-testid="success-count"
          >
            {t("nav.success", { count: successCount })}
          </span>
          <span
            className="badge badge-pill badge-danger"
            data-testid="error-count"
          >
            {t("nav.error", { count: errorCount })}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default GameNav;
