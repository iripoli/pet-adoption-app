import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware, logger];
middlewares.push(logger);

const composeEnhancers = compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
console.log(store.getState());
