import { useGetImagesQuery } from "../../actions/GameApi";
import WelcomeModal from "../WelcomeModal/WelcomeModal";
import GameBody from "../Game/GameBody";
import "./styles.scss";
import Spinner from "./Spinner";

/**
 * To ensure that the body only shows after the application's API has been called,
 * we create a component that hosts the API call and shows a spinner until
 * the call has ended
 */
const ApplicationBody = () => {
  // We call the Redux API created by the Redux toolkit. It works similar to react-query
  const { data, isLoading } = useGetImagesQuery(20);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="application-body">
      <WelcomeModal />
      <GameBody data={data} />
    </div>
  );
};

export default ApplicationBody;
