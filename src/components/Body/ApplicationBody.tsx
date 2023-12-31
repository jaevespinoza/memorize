import { useGetImagesQuery } from "../../actions/GameApi";
import WelcomeModal from "../WelcomeModal/WelcomeModal";
import GameBody from "../Game/GameBody";
import "./styles.scss";
import Spinner from "./Spinner";
import shuffleArrayAndAssignId from "../../../utils/shuffle";
import VictoryModal from "../VictoryModal/VictoryModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../config/store";
import { useEffect, useState } from "react";

/**
 * To ensure that the body only shows after the application's API has been called,
 * we create a component that hosts the API call and shows a spinner until
 * the call has ended
 */
const ApplicationBody = () => {
  // We call the Redux API created by the Redux toolkit. It works similar to react-query
  const { data, isLoading } = useGetImagesQuery(20);
  const [shuffledData, setShuffledData] = useState(() =>
    shuffleArrayAndAssignId([])
  );

  const successfulGames = useSelector(
    (state: RootState) => state.game.successfulGames
  );

  useEffect(() => {
    setShuffledData(shuffleArrayAndAssignId(data!));
  }, [successfulGames, data]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="application-body">
      <WelcomeModal />
      <VictoryModal numberToSuccess={data!.length} />
      <GameBody data={shuffledData} />
    </div>
  );
};

export default ApplicationBody;
