import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import ConfigureStore from "./Redux/Store/ConfigureStore";

const Store = ConfigureStore()
function App() {
  return (
    <Provider store={Store}>
      <div style={{backgroundColor:"black"}}>
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
