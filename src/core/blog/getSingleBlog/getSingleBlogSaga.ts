import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import { GetBlog } from "./getSingleBlogServices";
import * as actionCreators from "./getSingleBlogActionCreator";
import { GET_SINGLE_BLOG_REQUEST } from "./getSingleBlogActionTypes";

function* onLoadGetBlogs() {
  try {
    const blogs: AxiosResponse<ResponsePayload> = yield call(GetBlog);
    const { data } = blogs;
    yield put(actionCreators.getSingleBlogSuccess(data));
  } catch (error: any) {
    yield put(actionCreators.getSingleBlogFailure(error.response.data));
  }
}
function* watchOnLoadGetBlogs() {
  yield takeEvery(GET_SINGLE_BLOG_REQUEST, onLoadGetBlogs);
}

export default function* GetBlogsSaga() {
  yield all([fork(watchOnLoadGetBlogs)]);
}
