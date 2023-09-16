import { Provider } from "react-redux";
import { store } from "../config/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ApplicationBody from "./components/Body/ApplicationBody";

/**
 * The App that will be rendered in the DOM. We wrap our application in a Provider
 * component so that all components have access to the store and state
 * @returns Application to be rendered
 */
const App = () => {
  return (
    <Provider store={store}>
      <ApplicationBody />
    </Provider>
  );
};

export default App;
