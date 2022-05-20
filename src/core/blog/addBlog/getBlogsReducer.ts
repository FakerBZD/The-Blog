import * as actions from "./addBlogActionTypes";

export interface AddBlogsState {
  request: boolean;
  success: boolean;
  failure: boolean;
  message: string;
}

const initialState: AddBlogsState = {
  request: false,
  success: false,
  failure: false,
  message: "",
};

export default function addBlogsReducer(
  // eslint-disable-next-line default-param-last
  state: AddBlogsState = initialState,
  action: actions.AddBlogAction
): AddBlogsState {
  switch (action.type) {
    case actions.ADD_BLOG_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failure: false,
      };
    case actions.ADD_BLOG_SUCCESS:
      return {
        ...state,
        request: false,
        success: true,
        failure: false,
        message: action.payload.message!,
      };
    case actions.ADD_BLOG_FAILURE:
      return {
        ...state,
        request: false,
        success: false,
        failure: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
