import { applyMiddleware, compose as reduxCompose, createStore, Reducer, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./redux/sagas/index";
import createRootReducer from "./redux/modules/index";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);
middlewares.push(logger);

const compose =
  (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  reduxCompose;

// middleware
const enhancer = compose(applyMiddleware(...middlewares));

export default (initialState?: any) => {
  type MyStore = Store<typeof createRootReducer> & { runSagaTask: any; sagaTask: any };
  const store = createStore(createRootReducer(), initialState, enhancer) as MyStore;
  store.runSagaTask = () => {
    store.sagaTask = (sagaMiddleware as any).run(rootSaga);
  };
  store.runSagaTask();
  if (module.hot) {
    module.hot.accept("./redux/modules/index", () => {
      store.replaceReducer(createRootReducer() as any);
    });
  }

  return store;
};
