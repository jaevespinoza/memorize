import { Provider } from "react-redux";
import { store } from "../config/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <>H</>
    </Provider>
  );
}

export default App;
