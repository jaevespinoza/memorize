import { IImageData } from "../../reducer/AppActionsInterface";

const GameBody = ({ data }: { data: IImageData }) => {
  return (
    <div className="container game-container">
      {data.entries.map((item) => item.fields.image.uuid)}
    </div>
  );
};

export default GameBody;
