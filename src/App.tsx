import { Provider } from "react-redux";
import { store } from "../config/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";
import GameBody from "./components/Game/GameBody";

const App = () => {
  return (
    <Provider store={store}>
      <GameBody />
      <WelcomeModal />
    </Provider>
  );
};

export default App;
