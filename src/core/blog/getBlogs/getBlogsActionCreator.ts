import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";
import * as actions from "./getBlogsActionTypes";

export function getBlogsRequest(): actions.GetBlogsRequestAction {
  return {
    type: actions.GET_BLOGS_REQUEST,
  };
}

export function getBlogsSuccess(
  payload: ResponsePayload
): actions.GetBlogsSuccessAction {
  return {
    type: actions.GET_BLOGS_SUCCESS,
    payload,
  };
}

export function getBlogsFailure(
  payload: ResponsePayload
): actions.GetBlogsFailureAction {
  return {
    type: actions.GET_BLOGS_FAILURE,
    payload,
  };
}
