import { all } from "redux-saga/effects";
import newsSagas from "./news/news";

export default function* rootSaga() {
  yield all([newsSagas()]);
}
