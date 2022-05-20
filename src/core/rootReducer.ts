import { combineReducers } from "redux";
import addBlogsReducer from "./blog/addBlog/getBlogsReducer";
import getBlogsReducer from "./blog/getBlogs/getBlogsReducer";
import getBlogReducer from "./blog/getSingleBlog/getSingleBlogReducer";

const rootReducer = combineReducers({
  getBlogs: getBlogsReducer,
  getBlog: getBlogReducer,
  addBlog: addBlogsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
