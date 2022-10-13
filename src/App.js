import AppRoutes from "./routes/AppRoutes";
import Header from "./Screen/Header";
import { Provider } from "react-redux";
import ConfigureStore from "./Redux/Store/ConfigureStore";

const Store = ConfigureStore()
function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
