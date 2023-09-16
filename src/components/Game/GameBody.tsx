import { IImageField } from "../../reducer/AppActionsInterface";
import GameCard from "./GameCard";
import "./styles.scss";

const GameBody = ({ data }: { data: IImageField[] }) => {
  return (
    <div className="game-container">
      <nav className="navbar navbar-dark bg-primary game-container__header"></nav>
      <div className="container game-container__body">
        {data.map((item) => (
          <GameCard
            url={item.fields.image.url}
            uuid={item.fields.image.uuid}
            title={item.fields.image.title}
            content_type={item.fields.image.content_type}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBody;
