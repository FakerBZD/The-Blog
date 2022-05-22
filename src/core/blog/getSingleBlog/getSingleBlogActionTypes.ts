import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const GET_SINGLE_BLOG_REQUEST = "GET_SINGLE_BLOG_REQUEST";

export interface GetSingleBlogRequestAction {
  type: typeof GET_SINGLE_BLOG_REQUEST;
  id: string;
}

export const GET_SINGLE_BLOG_SUCCESS = "GET_SINGLE_BLOG_SUCCESS";
export interface GetSingleBlogSuccessAction {
  type: typeof GET_SINGLE_BLOG_SUCCESS;
  payload: ResponsePayload;
}

export const GET_SINGLE_BLOG_FAILURE = "GET_SINGLE_BLOG_FAILURE";
export interface GetSingleBlogFailureAction {
  type: typeof GET_SINGLE_BLOG_FAILURE;
  payload: ResponsePayload | Error;
}

export type GetSingleBlogAction =
  | GetSingleBlogRequestAction
  | GetSingleBlogSuccessAction
  | GetSingleBlogFailureAction;
