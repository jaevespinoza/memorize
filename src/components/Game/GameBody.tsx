import { useSelector } from "react-redux";
import {
  IDuplicatedImage,
  ISelectedImage,
} from "../../interfaces/AppActionsInterface";
import GameCard from "./GameCard";
import "./styles.scss";
import { RootState } from "../../../config/store";

const doesIdExistInArrays = (
  id: number,
  selected: ISelectedImage[],
  found: ISelectedImage[]
) => {
  return (
    selected.some((item) => item.id === id) ||
    found.some((item) => item.id === id)
  );
};

const GameBody = ({ data }: { data: IDuplicatedImage[] }) => {
  const selectedCards = useSelector(
    (state: RootState) => state.game.selectedCards
  );

  const foundCards = useSelector((state: RootState) => state.game.foundCards);
  const successCount = useSelector((state: RootState) => state.game.success);
  const errorCount = useSelector((state: RootState) => state.game.errors);

  return (
    <div className="game-container">
      <nav className="navbar navbar-dark bg-primary game-container__header fixed-top">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <h3 className="game-container__header__title mb-0">Memorize!</h3>
          </div>
          <div className="game-container__header__counters text-white">
            <span className="game-container__header__counters__success">
              Success: {successCount}
            </span>
            <span className="game-container__header__counters__error">
              Errors: {errorCount}
            </span>
          </div>
        </div>
      </nav>
      <div className="container game-container__body">
        {data.map((item) => (
          <div className="col-lg-1 col-md-3 col-sm-6 col-3 m-1">
            <GameCard
              id={item.id}
              revealed={doesIdExistInArrays(item.id, selectedCards, foundCards)}
              url={item.url}
              uuid={item.uuid}
              title={item.title}
              content_type={item.content_type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBody;
