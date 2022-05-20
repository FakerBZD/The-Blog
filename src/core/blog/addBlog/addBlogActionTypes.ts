import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const ADD_BLOG_REQUEST = "ADD_BLOG_REQUEST";

export interface AddBlogRequestAction {
  type: typeof ADD_BLOG_REQUEST;
  payload: any;
}

export const ADD_BLOG_SUCCESS = "GET_BLOGS_SUCCESS";
export interface AddBlogSuccessAction {
  type: typeof ADD_BLOG_SUCCESS;
  payload: ResponsePayload;
}

export const ADD_BLOG_FAILURE = "ADD_BLOG_FAILURE";
export interface AddBlogFailureAction {
  type: typeof ADD_BLOG_FAILURE;
  payload: ResponsePayload | Error;
}

export type AddBlogAction =
  | AddBlogRequestAction
  | AddBlogSuccessAction
  | AddBlogFailureAction;
