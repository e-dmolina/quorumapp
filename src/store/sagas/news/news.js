import { call, put, takeLatest } from "redux-saga/effects";
import { getAllNews } from "../../../service/NewsService";
import {
  fetchNews,
  fetchNewsError,
  fetchNewsStart,
  fetchNewsSuccess,
} from "../../slices/news/newsSlice";

function* fetchNewsWorker() {
  try {
    yield put(fetchNewsStart());
    const response = yield call(getAllNews);
    yield put(fetchNewsSuccess(response));
  } catch (error) {
    yield put(fetchNewsError(error));
  }
}

export default function* newsSagas() {
  yield takeLatest(fetchNews, fetchNewsWorker);
}
