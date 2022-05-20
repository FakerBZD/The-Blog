import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import * as actions from "./addBlogActionTypes";

export function addBlogRequest(payload: any): actions.AddBlogRequestAction {
  return {
    type: actions.ADD_BLOG_REQUEST,
    payload,
  };
}

export function addBlogSuccess(
  payload: ResponsePayload
): actions.AddBlogSuccessAction {
  return {
    type: actions.ADD_BLOG_SUCCESS,
    payload,
  };
}

export function addBlogFailure(
  payload: ResponsePayload
): actions.AddBlogFailureAction {
  return {
    type: actions.ADD_BLOG_FAILURE,
    payload,
  };
}
