import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import newsReducer from "./slices/news/newsSlice";
import rootSaga from "./sagas/index";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
