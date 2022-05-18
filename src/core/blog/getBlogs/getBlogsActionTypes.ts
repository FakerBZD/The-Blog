import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const GET_BLOGS_REQUEST = "GET_BLOGS_REQUEST";

export interface GetBlogsRequestAction {
  type: typeof GET_BLOGS_REQUEST;
}

export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export interface GetBlogsSuccessAction {
  type: typeof GET_BLOGS_SUCCESS;
  payload: ResponsePayload;
}

export const GET_BLOGS_FAILURE = "GET_BLOGS_FAILURE";
export interface GetBlogsFailureAction {
  type: typeof GET_BLOGS_FAILURE;
  payload: ResponsePayload | Error;
}

export type GetBlogsAction =
  | GetBlogsRequestAction
  | GetBlogsSuccessAction
  | GetBlogsFailureAction;
