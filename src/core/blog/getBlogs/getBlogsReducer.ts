import * as actions from "./getBlogsActionTypes";

export interface BlogsState {
  request: boolean;
  success: boolean;
  failure: boolean;
  message: string;
  blogs: any;
}

const initialState: BlogsState = {
  request: false,
  success: false,
  failure: false,
  message: "",
  blogs: {},
};

export default function getBlogsReducer(
  // eslint-disable-next-line default-param-last
  state: BlogsState = initialState,
  action: actions.GetBlogsAction
): BlogsState {
  switch (action.type) {
    case actions.GET_BLOGS_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failure: false,
        blogs: {},
      };
    case actions.GET_BLOGS_SUCCESS:
      return {
        ...state,
        request: false,
        success: true,
        failure: false,
        blogs: action.payload.message!,
      };
    case actions.GET_BLOGS_FAILURE:
      return {
        ...state,
        request: false,
        success: false,
        failure: true,
        blogs: action.payload.message,
      };
    default:
      return state;
  }
}
