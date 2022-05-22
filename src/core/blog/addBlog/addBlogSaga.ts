import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import { AddBlog } from "./addBlogServices";
import * as actionCreators from "./addBlogActionCreator";
import { ADD_BLOG_REQUEST } from "./addBlogActionTypes";

function* onLoadAddBlog({ payload }: any) {
  console.log("in sagaa");
  try {
    const blogs: AxiosResponse<ResponsePayload> = yield call(AddBlog, payload);
    const { data } = blogs;
    yield put(actionCreators.addBlogSuccess(data));
  } catch (error: any) {
    yield put(actionCreators.addBlogFailure(error.response.data));
  }
}
function* watchOnLoadAddBlog() {
  yield takeEvery(ADD_BLOG_REQUEST, onLoadAddBlog);
}

export default function* AddBlogSaga() {
  yield all([fork(watchOnLoadAddBlog)]);
}
