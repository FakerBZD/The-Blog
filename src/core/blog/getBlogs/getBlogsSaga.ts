import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import { GetBlogs } from "./getBlogsServices";
import * as actionCreators from "./getBlogsActionCreator";
import { GET_BLOGS_REQUEST } from "./getBlogsActionTypes";

function* onLoadGetBlogs() {
  try {
    const blogs: AxiosResponse<ResponsePayload> = yield call(GetBlogs);
    const { data } = blogs;
    yield put(actionCreators.getBlogsSuccess(data));
  } catch (error: any) {
    yield put(actionCreators.getBlogsFailure(error.response.data));
  }
}
function* watchOnLoadGetBlogs() {
  yield takeEvery(GET_BLOGS_REQUEST, onLoadGetBlogs);
}

export default function* GetBlogsSaga() {
  yield all([fork(watchOnLoadGetBlogs)]);
}
