import * as actions from "./getSingleBlogActionTypes";

export interface BlogState {
  request: boolean;
  success: boolean;
  failure: boolean;
  message: string;
  blog: any;
}

const initialState: BlogState = {
  request: false,
  success: false,
  failure: false,
  message: "",
  blog: {},
};

export default function getBlogReducer(
  // eslint-disable-next-line default-param-last
  state: BlogState = initialState,
  action: actions.GetSingleBlogAction
): BlogState {
  switch (action.type) {
    case actions.GET_SINGLE_BLOG_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failure: false,
        blog: {},
      };
    case actions.GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        request: false,
        success: true,
        failure: false,
        blog: action.payload.message!,
      };
    case actions.GET_SINGLE_BLOG_FAILURE:
      return {
        ...state,
        request: false,
        success: false,
        failure: true,
        blog: action.payload.message,
      };
    default:
      return state;
  }
}
