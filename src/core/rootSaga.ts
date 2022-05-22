import { all, fork } from "redux-saga/effects";
import AddBlogSaga from "./blog/addBlog/addBlogSaga";
import GetBlogsSaga from "./blog/getBlogs/getBlogsSaga";

export default function* rootSaga() {
  yield all([fork(GetBlogsSaga), fork(AddBlogSaga)]);
}
