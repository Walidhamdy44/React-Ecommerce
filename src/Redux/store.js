import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleare = [thunk];

const initalState = {};

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleare))
);

export default store;
