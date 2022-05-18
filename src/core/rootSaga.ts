import { all, fork } from "redux-saga/effects";
import GetBlogsSaga from "./blog/getBlogs/getBlogsSaga";

export default function* rootSaga() {
  yield all([fork(GetBlogsSaga)]);
}
