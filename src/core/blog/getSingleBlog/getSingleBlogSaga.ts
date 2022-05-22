import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import { GetBlog } from "./getSingleBlogServices";
import * as actionCreators from "./getSingleBlogActionCreator";
import { GET_SINGLE_BLOG_REQUEST } from "./getSingleBlogActionTypes";

function* onLoadGetSinlgeBlog(payload: any) {
  try {
    const blogs: AxiosResponse<ResponsePayload> = yield call(
      GetBlog,
      payload.id
    );
    const { data } = blogs;
    yield put(actionCreators.getSingleBlogSuccess(data));
  } catch (error: any) {
    yield put(actionCreators.getSingleBlogFailure(error.response.data));
  }
}
function* watchOnLoadGetSingleBlog() {
  yield takeEvery(GET_SINGLE_BLOG_REQUEST, onLoadGetSinlgeBlog);
}

export default function* GetSingleBlogSaga() {
  yield all([fork(watchOnLoadGetSingleBlog)]);
}
