import { useSelector } from "react-redux";
import "./styles.scss";
import { RootState } from "../../../config/store";

/**
 * Nav of the site that shows the name of the game, and the
 * counter for both the successes and the errors.
 * It uses selectors to access the state and show the values.
 */
const GameNav = () => {
  const successCount = useSelector((state: RootState) => state.game.success);
  const errorCount = useSelector((state: RootState) => state.game.errors);
  return (
    <nav className="navbar navbar-dark bg-primary game-container__header fixed-top">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <h3 className="game-container__header__title mb-0">Memorize!</h3>
        </div>
        <div className="game-container__header__counters text-white">
          <span className="badge badge-pill badge-success">
            Success: {successCount}
          </span>
          <span className="badge badge-pill badge-danger">
            Errors: {errorCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default GameNav;
