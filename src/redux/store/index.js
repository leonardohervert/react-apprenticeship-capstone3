import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducers from "../reducers";
import loggerMiddleware from "../middleware/logger";
import monitorReducerEnhancer from "../enhancers/monitor.reducer";

function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(Reducers, preloadedState, composedEnhancers);
  return store;
}

export default configureStore;
