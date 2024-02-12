import { configureStore } from "@reduxjs/toolkit";
import stateData from "../redux/stateData";
import createSagaMiddleware from "@redux-saga/core";
import { saga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	devTools: true,
	reducer: {state: stateData},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)]
});

sagaMiddleware.run(saga);
export default store;