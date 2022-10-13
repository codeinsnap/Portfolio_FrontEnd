import { applyMiddleware, createStore, compose} from "redux-typescript";
import thunk from "redux-thunk";
import CombineReducers from "../Reducers/CombineReducers";

export default function ConfigureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk];
  const store = createStore(
    CombineReducers,
    initialState,
    composeEnhancers,
    applyMiddleware(...middleware)
  );
  return store;
}
