import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
