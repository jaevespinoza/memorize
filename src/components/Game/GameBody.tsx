import { useSelector } from "react-redux";
import {
  IDuplicatedImage,
  ISelectedImage,
} from "../../interfaces/AppActionsInterface";
import GameCard from "./GameCard";
import "./styles.scss";
import { RootState } from "../../../config/store";
import GameNav from "./GameNav";
import SuccessAlert from "./SuccessAlert";

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

  return (
    <div className="game-container">
      <GameNav />
      <div className="container game-container__body">
        {data.map((item) => (
          <div className="col-lg-1 col-md-2 col-sm-3 col-3 m-1" key={item.id}>
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
      <div className="container game-container__notification">
        <SuccessAlert show={true} success={true} />
      </div>
    </div>
  );
};

export default GameBody;
