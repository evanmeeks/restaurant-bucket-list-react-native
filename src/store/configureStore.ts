// eslint-disable-next-line
import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "react-native-debugger";
// import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

// const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(sagaMiddleware);

// middleware = composeWithDevTools(middleware);

export default function configureStore() {
	const store = createStore(rootReducer, middleware);
	sagaMiddleware.run(rootSaga);
	return store;
}
