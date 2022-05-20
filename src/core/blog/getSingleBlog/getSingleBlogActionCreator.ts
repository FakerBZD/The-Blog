import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import * as actions from "./getSingleBlogActionTypes";

export function getSingleBlogRequest(): actions.GetSingleBlogRequestAction {
  return {
    type: actions.GET_SINGLE_BLOG_REQUEST,
  };
}

export function getSingleBlogSuccess(
  payload: ResponsePayload
): actions.GetSingleBlogSuccessAction {
  return {
    type: actions.GET_SINGLE_BLOG_SUCCESS,
    payload,
  };
}

export function getSingleBlogFailure(
  payload: ResponsePayload
): actions.GetSingleBlogFailureAction {
  return {
    type: actions.GET_SINGLE_BLOG_FAILURE,
    payload,
  };
}
