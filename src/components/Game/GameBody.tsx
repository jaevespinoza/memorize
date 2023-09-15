import { useGetImagesQuery } from "../../actions/GameApi";
import { Spinner } from "react-bootstrap";

const GameBody = () => {
  const { data, error, isLoading } = useGetImagesQuery(20);

  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <></>
  );
};

export default GameBody;
